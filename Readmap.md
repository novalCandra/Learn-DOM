## One Day
    ### Definiosn DOM
        - Dom adalah Kepanjangan Dari Documents Object Model
        yang dimana Documents pada paling pada Browser dari
        Struktur HTML dan XML dalam Bentuk tree oleh Javascript.

        - DOM Memungkinkan kita untuk mengubah isi, struktur, still documents dari contet HTML
        dan memberikan perubahan pada Javascript

        - Dom Bekerja Di Web Browsser

    ### Cara Kerja DOm
        - document : ini adalah document atau object pada Web Browser
        atau tag 
        - Cara Isi dari Object Document / Webb Browser : console.dir(document)

        - Cara Melakuan perubahan tanpa merusak code nya
        - document.all : Mengambil Element-element yang ada Di Web Browser
        - innertext : Mengambil Text saja 
        - innerHTML : Mengambil Element saja
        - TextContent : Hampir sama dengan innerText cuman bedanya dia akan tetap bisa mengambil nilai text nya meskipun nilai text di sembunyikan.

        - cara chek fungsi ada properti yanv ada Webb kita pakai method dir

## Two Day
    ### Mendapatkan Element HTML Dengan ID
    - Untuk Melakukan Perubahan Kepada Webb Bowser Kita Memamkai Metode Selecting
    - Selecting : untuk Melakuan Perubahan
    Didalam Javascript ada banyak selecting
    1. getElementbyId -> Select Sebuah Element Berdasarkan ID.
    2. getElementByTagname -> Select Sebuah Tag HTML.
    3. getElementByClassname -> Select Element Berdasarkan Class Tersebut.

    ### Fungsi selector pada javascript kita bisa mengambil properti yanga ada Di Webb Kita
    - dari style
    - perubahan Values

    ### Mendapatkan Element HTML Berdasarkan Tag dan Class
    - HTMLCollection adalah Kumpulan-kumpulan pada Object pada HTML
    yang diaman kita bisa mengubah-ubah sebuah Object HTML.

    HTMLCollection hanya mirip dengan Array saja bukan Array.

## Three Day 
    ### Lebih mudah Memilih Element dengan Menggunakan Query Selector
    ### Didalam Documents memiliki banuyak sekali Method-method - Properies

### Four Today
    ### Fungsi dari Query Selector yang dimana kita bisa 
    select sebuah Tag, Class, atau pun Id.

    ### Swim-army-knife nya DOM untuk seleksi element

    ###untyk mendapatkan nilai pada seluruh webiste menggunakan document.querySelectorAll('')

    - Bedanya
    1. document.querySelector() : Hanya Menampilkan ini dari element,class atau id tersebut
    2. document.querySelectorAll() : Mengambil seluruh element, class atau id di dalam website tersebut

    - kalau ingin mengambil element di dalam element
    tinggal gini saja ('namaElement namaElement')
    atau 
    ('namaElement [attributnya]')
    - Memanfaatkan Nodelist

### Five Today
    ### Atrubut yang di miliki OLeh HTML
    - setAttribut : Artinya Menambahkan Sebuah Attribut yang ada Di HTML
    - removeAttribut : Artinya Menghapus Atribut yang ada di HTML Kita

### Six Today
    - Belajar Syle dengan Object ClassList pada DOM Javascript
    - ClassList adalah sebuah Object untuk Style Sebuah Website,
    yang dimana kita bisa mengisi style pada website tersebut

    - Jadi class List Mempresentasikan Object yang mempresentasikan List atau Daftar

    - ClassLIst itu seperti label-label yang di tempel di kotak.
    ## Class LIst memeliki Properti
        - add : Menambahkan Class
        - remove : Menghapus Clas
        - toggle : Seperti Button ON atau OFF
        - contains : Memberikan Kondisi jika ada class true, kalau tidak ada maka false

    ### tetapi tetap kita membutuhkan CSS yah classList itu hanya mengumpulkan class-class tersebut


### Seven Today
    - Learn Menjelejahi Element Parrent, Child, Slibing
    1. Parrent : dia adalah Element Induk yang dimana sebelum element yang di bungkus / di atas elemen Bungkus
    2. Child : dia adalah Element Anak yang di bawah Parrent nya
    3. Sibbling : Sibling adalah Element Sejajar yang dimana memiliki saudadara atas atau saudara bawah
        - previousSibbling : adalag saudara yang sebelum nya.
        - nextSibbling : adalah saudara yang sesudahnya.

    - Memahami Append dan AppendChild
        1. AppendChild : Menambahkan Element HTML
        2. Append : Menambahkan Text pada HTML

    - membuat Element di dalam Documentry
    menggunakan Method untuk createElement('namaTag');

    - cara menambahkan element diantara element-element lain nya
    - insertAdjacentHTML() ini adalah menambahkan element-element lain nya


### Eight Today
    - Cara Menghapus Element
        - removeChild() : kalau ingin menghapus element tersebut tentukan dan pakek fungsi nya
        sama aja bedanya ini bisa di pakek Browser yang lama.
        - remove(): element mana yang ingin di hapus.


### Nine Today
    - Pengenalan Event DOM
        1. Tentang Inline Event DOM
            adalah dengan cara menambahkan event yang kita mau dengan attribut
            onclik dan lain-lain nya.

            didalam nya kita bisa melakukan code javascript nya
            disaran jangan nya yah soal tidak rapi code nya.

            // event ondblclick jika button di tekan sekali tidak ada reaksi kalau di tekan 2 kali ada reaksi
            // event onclick jika button di klik sekali maka ada reaksi
        Event adalah Kejadian

        2. What`s Event
            - Event adalah sebuah Kejadian
            - MenindakLajuti inputan atau Perintah Pengguna.

### Ten Today
    - Contoh Beberapa Event pada DOM Javascript
    - Menjalankan Event Melalui Properti Today

    # conmouseover adalah event jika diarahkan saja maka menampilkan output nya
        didalam Event kita bisa segala element tidak harus button saja yah.

### Eleven Today
    - Event addEventLIstener adalah event yang lebih power lagi
    - Event addEventLIstener untuk menjalankan CallBack / atau function saat event di eksekusi
    - Kalau Membahasa Call back yang dimana Call back bisa kita isi function dinamis

    - Perbedaan saat menggunakan addEventLIstener dan memakai function dan Properti biasa
    yang dimana nilai nya akan di replace atau di timpa oleh nilai baru, addEventLIstener bisa di pakek
    nilai nya tidak replace meskipun ada nilai baru akan tetap memunculkan tanap khawatir di timpa.

### Two Eleven Today
    - Learn Javascript DI W3 School
        ## Tentang Output Javascript
        1. Materi document.write() -> membuat Object Menulis.
        2. Materi window.alert() -> Membuat Object Webb Browser akan menampilkan Pop Up
        3. Materi alert() -> Menampilkan Pop up pada Document Browser
        4. Materi Console.log() -> Menampilkan Output nya.
        5. Materi window.print() -> Menampilkan Download Print pada Documents

### Three Elevent Today
    - Membahas Node dan Tipe-tipe Node
    - Membahas Tentang Perbedaan NodeList dan HTMLCollection
    1. HTMLCollection : adalah Element HTML yang ada Di Webb Apps yang kita Buat
    2. NodeList : adalah kumpulan isi yang tidak peduli Tipe nya.

    HTMLColecction adalah Kumpulan Element-elment HTML
    NodeList adalah Kumpulan node dan tidak peduli Tipe nya.

    HTMLColecction Bersifat Live , Sedangkan NodeList tidak bersifat Live.

    - Membahas Struktur DOM Hireaki
        1. Root Node : yang artinya node ini paling tinggi di Web Browser App yang kita Buat
            - document : adalah node paling tinggi
        2. Parent Node : adalah node ini 1 lebih tinggi dari node yang lain
            seperti : h1, p, DLL
        3. Child Node: adalah node ini 1 tingkat bawah dari node di atas nya
            seperti : h1 yang ada di node Body


### Four Elevent Today
    - Latian Addvelistner untuk Generate Color


### Five Elevent Today
    - Belajar Keyboard Event dan Mengenal Object Dalam Event
        1. Pengenalan Object di dalam Event
        2. Mempelejari keydown, keyup
        3. Object yang di pakek intuk Event Keyboard Menggunakan
            - code : yang dimana dia fungsi untuk mengetahui user menekan keyboard dimana

        4. Mempeljari onmouseup dan mousedown
            - mousedown jika di arahkan mouse kita akan memuncul kan sebuah event atau kejadian
            - onmouseup jika di klik maka akan memunculkan sebuah event atau kejadian

### Six Elevent Today
    - Mengenal Event Preventdefault
        1. Mempeljari Change
            - Change sama dengan keydown dan keyup bedanya
                change akan memunculkan hasil Karakter pada keyboard
                selain itu maka tidak akan memunculkan apa-apa.


### Seven Elevent Today
    1. Manfaatkan Keyword This Pada Event Dom
    2. Perulangan for of [X]
        - kegunaan for of akan melakukan perulangan dari nilai Object [X]
    3. Praktek Input Realtime Dengan Event Dan Dom [X]
    4. Event Input Dan Change Pada Form
        - mengenal addEventListener change, dan input
            di dalam form.

### Eight Eleven Today
    1. Mengenal Event Bubbling
        - adalah sebuah event yang di bungkus oleh element lain.
        - mengenal toggle 
    2. Mengenal Event Delegation
        - ingin menghapus elmenet li saat di tekan

### Nine Eleven Today
    1. Latian Pembuatan Latian Skor
        - [X] membuat keranngka
        - [X] membuat logic user saat menekan buttons