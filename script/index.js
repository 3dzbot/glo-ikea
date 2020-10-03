'use strict';

import generateCatalog from './generateCatalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateSubCatalog from './generateSubCatalog.js';
import {catalog} from './catalog.js';
import {loadData} from './loadData.js';

generateHeader();
generateSubCatalog();
generateCatalog();
generateFooter();

catalog();
loadData();