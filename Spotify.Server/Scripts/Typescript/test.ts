/// <reference path="typings/knockout.d.ts" />

import { DataService } from './DataService';
DataService.get(DataService.url).then((x) => { console.log(x) })