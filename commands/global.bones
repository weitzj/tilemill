var fs = require('fs');
var path = require('path');
var defaults = models.Config.defaults;

Bones.Command.options['files'] = {
    'title': 'files=[path]',
    'description': 'Path to files directory.',
    'default': defaults.files.replace(/^~/, process.env.HOME)
};

Bones.Command.options['syncURL'] = {
    'title': 'syncURL=[URL]',
    'description': 'Mapbox sync URL.',
    'default': defaults.syncURL || ''
};

Bones.Command.options['syncAccount'] = {
    'title': 'syncAccount=[account]',
    'description': 'Mapbox account name.',
    'default': defaults.syncAccount || ''
};

Bones.Command.options['syncAccessToken'] = {
    'title': 'syncAccessToken=[token]',
    'description': 'Mapbox access token.',
    'default': defaults.syncAccessToken || ''
};

Bones.Command.options['verbose'] = {
    'title': 'verbose=on|off',
    'description': 'verbose logging',
    'default': defaults.verbose
};

// Host option is unused.
delete Bones.Command.options.host;
