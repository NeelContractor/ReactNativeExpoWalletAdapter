// polyfills.ts
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import { Buffer } from 'buffer';
import process from 'process';

global.Buffer = Buffer;
global.process = process;

// import { install } from 'react-native-quick-crypto';
// install();
