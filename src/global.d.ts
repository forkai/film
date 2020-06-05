interface ObjectString {
  [params: string]: string;
}
interface ObjectStrings {
  readonly [params: string]: string[];
}
declare type MethodsRule = 'startsWith' | 'endsWith' | 'includes';
interface Engine {
  get: Function;
  post: Function;
  put: Function;
  delete: Function;
  [params: string]: any;
}
interface Options {
  readonly methods?: ObjectStrings;
  mergeMethods?: ObjectStrings;
  config?: object;
  methodsRule?: MethodsRule;
  readonly rule?: string;
}
interface extract {
  sliceRegExp: RegExp
  paramsRegExp: RegExp
}