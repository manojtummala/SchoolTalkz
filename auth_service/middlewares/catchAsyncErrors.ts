export default (theFunc: Function) => (req: Request, res: Response, next: any) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
}