
/**********************************************************************
 
    Clippy - Copy Text To Clipboard Javascript Class (Documentation)

    Instantiate a Clippy instance like this:

    let newClippy = new Clippy('identifier-string','type-string','index')

    Only the type of id does not need an index value. Others need to know which 
    element in an array is intended to have a value for extraction

    Examples: Use the Clippy class like this:

        With an id - 
            let testThis = new Clippy('id-string','id',null); 
        With a className
            let testThis = new Clippy('className-string','className',0); 
        With a name
            let testThis = new Clippy('name-string','name',0);
        With a querySelector
            let testThis = new Clippy('querySelector-string','querySelector',0);

    Happy Clipping 

***************************************************************************/


class Clippy {

    // identifier - string used to select element with future clipboard content
    // type - what type of identifier? id, className, name, querySelector
    // index - indicates which index when an array of elements returned
    constructor(identifier,type,index) {
      this.identifier = identifier;
      this.type = type;
      this.index = index;
      this.init();
    }

    async setClipboard(text)
    {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Success: Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    async copyPswd()
    {
      let text
      switch (this.type) {
          case 'id':
            text = document.getElementById(this.identifier).value;
            break;
          case 'className':
            text = document.getElementsByClassName(this.identifier)[this.index].value;
            break;
          case 'name':
            text = document.getElementsByName(this.identifier)[this.index].value;
            break;
          case 'querySelector':
            text = document.querySelectorAll(this.identifier)[this.index].value;
            break;
          default:
            console.log('You have misconfigured Clippy :( ');
        }
        this.setClipboard(text);
    }
    
    init() 
    {
    	this.copyPswd();
    }

}

