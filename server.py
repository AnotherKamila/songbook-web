import cherrypy
import os

class App(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"

cherrypy.config.update({
    'server.socket_host': '0.0.0.0',
    'server.socket_port': int(os.environ.get('PORT', '5000')),
    'tools.proxy.on': True,
})
cherrypy.quickstart(App())
