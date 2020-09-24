import { login } from './login/router'
import { news } from './news/router'
import { table } from './table/router'
import { tableBootstrap } from './tableBootstrap/router'
import { forminput } from './forminput/router'

var page = []

page = page.concat(
    login,
    news,
    table,
    tableBootstrap,
    forminput
    
);

export default page