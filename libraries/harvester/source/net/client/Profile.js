
lychee.define('harvester.net.client.Profile').includes([
	'lychee.net.Service'
]).exports(function(lychee, global, attachments) {

	const _Service = lychee.import('lychee.net.Service');
	const _CACHE   = {};



	/*
	 * HELPERS
	 */

	const _on_sync = function(data) {

		if (data instanceof Array) {

			data.forEach(function(object) {
				_CACHE[object.identifier] = object;
			});

		}

	};



	/*
	 * IMPLEMENTATION
	 */

	let Composite = function(client) {

		_Service.call(this, 'profile', client, _Service.TYPE.client);


		this.bind('sync', _on_sync, this);

	};


	Composite.prototype = {

		/*
		 * ENTITY API
		 */

		serialize: function() {

			let data = _Service.prototype.serialize.call(this);
			data['constructor'] = 'harvester.net.client.Profile';


			return data;

		},



		/*
		 * CUSTOM API
		 */

		sync: function(data) {

			let tunnel = this.tunnel;
			if (tunnel !== null) {

				tunnel.send({}, {
					id:     this.id,
					method: 'index'
				});

			}

		},

		save: function(data) {

			if (data instanceof Object) {

				let profile = {
					identifier: typeof data.identifier === 'string' ? data.identifier : null,
					host:       typeof data.host === 'string'       ? data.host       : null,
					port:       typeof data.port === 'string'       ? data.port       : null,
					debug:      data.debug   === true,
					sandbox:    data.sandbox === true
				};

				let tunnel = this.tunnel;
				if (tunnel !== null && profile.identifier !== null && profile.host !== null && profile.port !== null) {

					tunnel.send(profile, {
						id:    this.id,
						event: 'save'
					});

				}

			}

		}

	};


	return Composite;

});

