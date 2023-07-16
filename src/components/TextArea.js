import React from 'react'
import Navbar from './Navbar';
import { EditorContent, useEditor } from '@tiptap/react'
import ReactDOM from 'react-dom';
import { Color } from '@tiptap/extension-color'
import Bold from '@tiptap/extension-bold'
import FontFamily from '@tiptap/extension-font-family'
import FontSize from 'tiptap-extension-font-size';
import TextStyle from '@tiptap/extension-text-style'
import Placeholder from '@tiptap/extension-placeholder'
import Italic from '@tiptap/extension-italic'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import History from '@tiptap/extension-history'
import Collaboration from '@tiptap/extension-collaboration'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

import './Style.css'
//import { json } from 'react-router-dom';


 
const ydoc = new Y.Doc()

// eslint-disable-next-line 
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)
const id = "103010673795422072338";


export default function TextArea(props) {



  let h = (localStorage.getItem('note'));
  const [notes, setNotes] = React.useState(JSON.parse(h).text);
 // localStorage.removeItem('note');
  const [notesFetch, setNotesFetch] = React.useState(false);
  let ans = "Type here...";

    const getNotes = async () => {
      try {
        const url = `${host}/document/${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const json = await response.json();
        console.log("Fetched notes:", json[0].description);
         ans = json[0].description;
         editor.chain().setContent(ans).run();
         setNotes(ans);
         setNotesFetch(true);
       // setNotes(json[0].description);
      } catch (err) {
        console.log(err);
      }
    };
    React.useEffect(() => {
    getNotes();
  }, []);





  //const [bold, setBold] = React.useState("normal");
  const [fontsize, setFontsize] = React.useState("14px");
  const [textarea, setTextarea] = React.useState("");
  const [share, setShare]       = React.useState(false);
  const [editorContent, setEditorContent] = React.useState("");

  const host = "http://localhost:5000"
 

// const [loading, setLoading] = React.useState(false);


 
 
 
   // let  text = "nvdklsnvkldnsv";
  //getNotes();

  
  /* // Get all Notes
   const getNotes = async()=>{
    //API CALL
    try{
    const url = `${host}/document/${id}`;
   const response =  await fetch(url, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       //'auth-token': `${props.profile.id}`
      },
   });
    const json =  await response.json();
    
      //console.log("hello",json);
   //json.length===0?console.log("random",json):
   console.log("Fetched notes:", (json[0].description));
   setNotes(json[0].description);
    

   //handleText(json[0].description);
   //setLoading(false);
  } catch(err){
    console.log(err);
  }
  
  }
  React.useEffect(() => {
    getNotes();
  }, [])
 */
 /*
  React.useEffect(() => {
    text = notes;
    console.log("Notes state:", (notes));
  }, [notes])
  */
  
//console.log("Notes state:", (notes[0].description)); 


  const handleShare=()=>{
    if(share) setShare(false);
    else setShare(true);
  }

  const handleTextarea=(e)=>{
    setTextarea(e);
  
  
  }
  const handleText = (e)=>{
    //console.log("working")
    setNotes(e);
   //setEditorContent(e);
   /*editor.commands.setContent({
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: e
          }
        ]
      }
    ]
  });
  */
  }
  

  const handleFontadd = ()=>{
    var newNum = Number(fontsize.slice(0,-2))+1;
    setFontsize((newNum).toString()+"px");
    editor.chain().setFontSize(fontsize).run()
    
  }
  const handleFontsub = ()=>{
    var newNum = Number(fontsize.slice(0,-2))-1;
    if(newNum>13) {
      setFontsize((newNum).toString()+"px");
    editor.chain().setFontSize(fontsize).run()
    }
  }


  const handleBold = ()=>{

    editor.chain().toggleBold().run();
  }

  const handleItalic = ()=>{
    console.log("button clicked");
     editor.chain().toggleItalic().run();
  }

  const handleUnderline = ()=>{
    editor.chain().toggleUnderline().run()
  }


  const handleHighlight = ()=>{
    editor.chain().toggleHighlight().run()
  }

  const handleBulletList = ()=>{
    editor.chain().toggleBulletList().run()
  }

  const handleOrderedList = ()=>{
    editor.chain().toggleOrderedList().run()
    //editor.chain().unsetTextAlign().run()
  }

  const handleLeftAlign = ()=>{
    editor.chain().setTextAlign('left').run()
  }

  const handleCenterAlign = ()=>{
    editor.chain().setTextAlign('center').run()
  }

  const handleRightAlign = ()=>{
    editor.chain().setTextAlign('right').run()
  }

  const handleJustifyAlign = ()=>{
    editor.chain().setTextAlign('justify').run()
  }

  const handleUndo = ()=>{
   editor.chain().undo().run();
  }

  const handleRedo = ()=>{
    editor.chain().redo().run();
   }
   const handleFontColor = (e)=>{
    editor.chain().setColor(e).run()
   }
   
   const handleFontFamily = (e)=>{
    editor.chain().setFontFamily(e).run()
   }

   const handleFontSize = (e)=>{
    editor.chain().setFontSize(e).run()
   }
   
   const handlePrint = ()=>{
    var divContents = document.getElementById("printout").innerHTML;
    var a = window.open('', '', 'height=3000, width=1500');
    a.document.write(divContents);
    a.document.close();
    a.print();
   }

   const handleImage =()=>{
    /*
    console.log("dsvksdbg");
    const insert = document.createElement("div");
    insert.innerHTML = <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fmountains-under-mist-morning-amazing-260nw-1725825019.jpg&tbnid=ez-ubljHwN9MSM&vet=12ahUKEwilv-v9gY7_AhVHpWMGHfAgDPMQMygHegUIARDvAQ..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature-background&docid=-rN1Pv5r7F-cuM&w=390&h=280&q=images&ved=2ahUKEwilv-v9gY7_AhVHpWMGHfAgDPMQMygHegUIARDvAQ" alt=""/>
    document.getElementById().appendChild(insert);
    */
   const url = window.prompt('URL')
   if(url) editor.chain().focus().setImage({ src: url }).run()
   }


   
  const editor = useEditor({
    extensions: [Document,Image, Dropcursor, Paragraph,Underline,Color,FontSize, Text,Highlight.configure({ multicolor: true }), Bold, Italic,BulletList,Heading, OrderedList,ListItem,TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),History,TextStyle,FontFamily,
    (Collaboration.configure({
      document: ydoc,
    })),
     Placeholder.configure({
      placeholder:
        'Type here...',
    }),],
    //content: `<p>${localStorage.getItem('text')}</p>`,
    //content: `<p>${editorContent}</p>`,
    content: `<p>${notes}</p>`,
    
   
    // triggered on every change
  onUpdate: ({ editor }) => {
      
      const jsonn = editor.getJSON()
     // if(json.content[0].content.length===1) editor.commands.insertContent(text)
    // var p = jsonn.content[0].content.length - 1;
    if (jsonn && jsonn.content && jsonn.content[0] && jsonn.content[0].content) {
    handleText(jsonn.content[0].content[0]);
   
    
     console.log("editorcontent",(jsonn.content[0]))
     //localStorage.setItem('text',json.content[0].content[1].text+json.content[0].content[0].text)
    

    
        //EDIT NOTE
    const editNote = async()=>{
       //API CALL
       const url = `${host}/updatedoc/${id}`;
      const response = await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          //'auth-token': `${props.profile.id}`
        },
        body: JSON.stringify(jsonn.content[0].content[0])
      });
      const json =  await response.json(); 
      console.log("editnote",json);
      localStorage.setItem('note',JSON.stringify(jsonn.content[0].content[0]));
       //let newNotes = JSON.parse(JSON.stringify(json.content[0].content[1].text+json.content[0].content[0].text));
         
        //setNotes(newNotes);
       
       
    }
    editNote();
  }


  
     /*
   
    handleText((json.content[0].content[0].text));
    // send the content to an API here
    console.log((json.content[0].content[1]))
    */
    
    
  },
  
  })

 
  /*
  React.useEffect(() => {
    if(editor!==null){
      console.log(editor.content,"yt",text)
    localStorage.setItem('text',text)
    }
    
  }, [text])
  
*/
  if (!editor) {
    return null
  }

  
  return (
    
    <>
    (<Navbar bold={handleBold} italic={handleItalic} underline={handleUnderline} textcolor={handleFontColor} highlight={handleHighlight} 
            fontControlsub={handleFontsub} fontControladd={handleFontadd} bullet={handleBulletList} leftAlign={handleLeftAlign} rightAlign={handleRightAlign} centerAlign={handleCenterAlign} 
            justifyAlign={handleJustifyAlign} numberList={handleOrderedList} undo={handleUndo} redo={handleRedo} textarea={handleTextarea} fontfamily={handleFontFamily} fontSize={handleFontSize}
             print={handlePrint} image={handleImage} share={handleShare} profile={props.profile}/>
    <div style={{border:"1px solid #ced4da",margin:"auto",marginTop:"15px",backgroundColor:"#f9fbfd",width:"96vw",height:"1170px"}}>
        
        <div id="printout" style={{border:"1px solid #ced4da",margin:"auto",marginTop:"20px",width:`${textarea}`,height:"1130px",overflow:"hidden", borderRadius:"0px",borderColor:"#ced4da",boxShadow: "none",padding:"70px"}}>

        <EditorContent  editor={editor} style={{margin:"none",outline:"none"}}/>
        
        {/*
        <div className="form-floating">
          
        
        <textarea className="form-control" placeholder=""  value={text}  onChange={handleText} id="floatingTextarea2" style={{height: "1130px",fontSize:`${fontsize}`,fontWeight:`${bold}`,fontStyle:`${italic}`,textDecorationLine:`${underline}`,color:`${textColor}`,backgroundColor:`${highLight}`,overflow:"hidden", borderRadius:"0px",borderColor:"#ced4da",boxShadow: "none",padding:"100px"}} > </textarea>
        <label htmlFor="floatingTextarea2"></label> 
        </div>
          
  */}
        </div>
        
    </div>)</>
  )
}
