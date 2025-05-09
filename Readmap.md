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