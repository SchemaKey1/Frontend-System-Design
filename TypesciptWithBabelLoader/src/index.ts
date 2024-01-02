import * as _ from "lodash";
import str1 from './str1';
import str2 from './str2';

const buildPage = (): Element => {
    const element = document.createElement('div');
    element.innerHTML = _.join([str1(), str2()]);
    return element;
}

document.body.append(buildPage());

