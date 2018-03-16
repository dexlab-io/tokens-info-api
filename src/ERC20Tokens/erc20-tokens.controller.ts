import { Controller, Get, Param } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import {find, startsWith, without} from 'lodash';
// tslint:disable-next-line:no-var-requires
const db = require('../../assets/db.json');
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

  @Get('/json')
  getJson() {
    try {
      const res = [];
      const json = [];

      fs.readdirSync(tokenYalmDirectory).forEach(file => {
        res.push(file.replace('.yaml', ''));
      });

      res.forEach( o => {
        const doc = yaml.safeLoad(fs.readFileSync(`${tokenYalmDirectory}${o}.yaml`, 'utf8'));
        json.push(doc);
      });

      fs.writeFile(tokenYalmDirectory + '../db.json', JSON.stringify(json), (err) => {
          if (err) {
              return err;
          }
      });

      return json;
    } catch (e) {
      return [];
    }
  }

  @Get('/search/symbol/:v')
  search(@Param() params) {
    return without(db.map(i => startsWith(i.symbol, params.v) ? i : undefined), undefined) || [];
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