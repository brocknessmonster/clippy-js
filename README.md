# clippy-js

Clippy JS is a Javascript class that lets you copy text to clipboard with very 
little configuration. Just pass in an identifier, indicate what type identifier is 
being passed, and what index the target element occurs at (if an array of 
elements is returned by the identifier type).

*** Requires HTTPS ***

let clippy = new Clippy('identifier','type','index');

Example:
```
<!-- the html -->
<input type="text" id="cool_stuff_id" name="cool_stuff_name" class="cool_stuff_class" value="this stuff is very cool" >
<button name="test_btn" class="btn" id="btn-id">Copy Cool Stuff To Clipboard</button>

<!-- how to use clippy.js -->



<script src="path/to/clippy.js"></src>
<script>
  /* using id */
  document.addEventListener("DOMContentLoaded",() => { 
      /* add click event to button to trigger clippy */
      document.getElementById('btn-id').addEventListener('click',()=>{
        let clipTest = new Clippy('cool_stuff_id','id',null);
      });
  });
</script>
<script>
  /* using name */
  document.addEventListener("DOMContentLoaded",() => { 
    /* add click event to button to trigger clippy */
    document.getElementById('btn-id').addEventListener('click',()=>{
      let clipTest = new Clippy('cool_stuff_name','name',0);
    });
  });
</script>
<script>
  /* using className */
  document.addEventListener("DOMContentLoaded",() => { 
    /* add click event to button to trigger clippy */
    document.getElementById('btn-id').addEventListener('click',()=>{
      let clipTest = new Clippy('cool_stuff_class','className',0);
    });
  });
</script>
<script>
  /* using querySelector w className */
  document.addEventListener("DOMContentLoaded",() => { 
    /* add click event to button to trigger clippy */
    document.getElementById('btn-id').addEventListener('click',()=>{
      let clipTest = new Clippy('.cool_stuff_class','querySelector',0);
    });
  });
</script>
<script>
  /* using querySelector w id */
  document.addEventListener("DOMContentLoaded",() => { 
    /* add click event to button to trigger clippy */
    document.getElementById('btn-id').addEventListener('click',()=>{
      let clipTest = new Clippy('#cool_stuff_id','querySelector',0);
    });
  });
</script>
```

