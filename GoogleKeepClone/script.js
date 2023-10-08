const addButton = document.querySelector("#add");
const container = document.getElementById('container');
const i_div = document.getElementById('i_div');
const help = document.querySelector('.help')




// this function takes the value of all the textareas made till the point of editing of the current note
// ,put them in an array and that array is
const updateLSData = () => {
  const textAreas = document.querySelectorAll("textarea");
  const notes = [];
//note here represent each element of updateLSData array

  textAreas.forEach((note) => {
    notes.push(note.value);
  });
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div"); // note is just the reference for div element
  note.classList.add("box");

  const htmlData = `
    <div class="note">
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i> </button>
        <button class="delete"><i class="fas fa-trash-alt"></i> </button>
     </div>
        <div class="main ${
          text ? "" : "hidden"
        }" > </div>     <!--remember that empty string is falsy-->
        <textarea class="${
          text ? "hidden" : ""
        }" ></textarea>    <!-- when there is no text, textarea is visible and when there is some text main div is visisble-->
    </div>`; // backticks support multiline string

  note.insertAdjacentHTML("afterbegin", htmlData);

  //getting references

  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  container.appendChild(note);                                               // it adds the element as the last child of the given parent

  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();

  });

                                                                                // in any case of text argument value, these must be initialised with text value
  mainDiv.innerText = text;
  textarea.value = text;                                                        // so that we can edit the input the text

  editButton.addEventListener("click", () => {
                                                                                // mainDiv.innerText= textarea.value; // alternative to .1.....
    mainDiv.classList.toggle("hidden"); // mainDiv--hidden
    textarea.classList.toggle("hidden"); // textarea--visible
  });

  textarea.addEventListener("change", (event) => {
                                                                                // .......1....initially for empty text argument

    mainDiv.innerText = textarea.value;
    updateLSData();
  });
};



const notes = JSON.parse(localStorage.getItem("notes"));       //if there is no 'notes' key in the local storage we get

if (notes) {
                                                                //notes here gives the array it stores
  notes.forEach((noteText) => {
    addNewNote(noteText);
  });
}

addButton.addEventListener("click", () => {

  console.log('hey')
    addNewNote();
});

i_div.addEventListener('click',()=>{

  help.classList.toggle('hidden')
})