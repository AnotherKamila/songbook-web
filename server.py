import cherrypy
import os

class App(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"

if __name__ == '__main__':
    cherrypy.config.update({
        'server.socket_host': '127.0.0.1',
        'server.socket_port': int(os.environ.get('PORT', '5000')),
    })
    cherrypy.quickstart(App())
