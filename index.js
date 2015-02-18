#!/usr/bin/env node
if (process.versions['atom-shell']) {
    require('./index-shell');
} else {
    process.env.shell = false;
    require('./index-server');
}
