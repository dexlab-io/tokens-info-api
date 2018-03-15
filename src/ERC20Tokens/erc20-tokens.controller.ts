import { Controller, Get, Param } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
// tslint:disable-next-line:no-var-requires
const yaml = require('js-yaml');
const tokenYalmDirectory = path.join(__dirname, '..', '..', '/assets/ERC20-tokens/');

@Controller('ERC20Tokens')
export class ERC20TokensController {
  @Get()
  findAll() {
    try {
      const res = [];

      fs.readdirSync(tokenYalmDirectory).forEach(file => {
        res.push(file.replace('.yaml', ''));
      });
      return res;
    } catch (e) {
      return [];
    }
  }

  @Get(':contractAddress')
  findOne(@Param() params) {
    try {
      const doc = yaml.safeLoad(fs.readFileSync(`${tokenYalmDirectory}${params.contractAddress}.yaml`, 'utf8'));
      doc.image = `https://raw.githubusercontent.com/TrustWallet/tokens/master/images/${params.contractAddress}.png`;
      return doc;
    } catch (e) {
      return {};
    }
  }
}