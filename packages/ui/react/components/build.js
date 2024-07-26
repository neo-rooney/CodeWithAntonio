import builder from '@cwa-util/builder';
import pkg from './package.json' assert { type: 'json' };

builder.run({ pkg });
