import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/\D/g, '')
      .replace(
        /(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/,
        (fullMatch, country, ddd, dddWithZero, prefixTel, suffixTel) => {
          if (country)
            return `${country} (${
              ddd || dddWithZero
            }) ${prefixTel}-${suffixTel}`;
          if (ddd || dddWithZero)
            return `(${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
          if (prefixTel && suffixTel) return `${prefixTel}-${suffixTel}`;
          return value;
        }
      );
  }
}
