interface IsInterface {
    string(s:string):boolean;
    number(n:number):boolean;
    bool(b:boolean):boolean;
    fn(f:Function):boolean;
    array(a:Array<any>):boolean;
    object(o:object):boolean;
    regex(r:string):boolean;
    element(e:HTMLElement):boolean;
    numeric(n:number):boolean;
    hash(h:string):boolean;
    inside(c:Array<any>|object,v:string|number):boolean;
    set(v:any):boolean;
    empty(c:Array<any>|object):boolean;
}

declare const is: IsInterface;

declare module "is" {
    export = is;
}
