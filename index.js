#!/usr/bin/env node
if (process.versions['atom-shell']) {
    require('./index-shell');
} else {
    require('./index-run-server');
}
