
const cv = {
    add: function (cm) {
        document.getElementsByTagName('body')[0].appendChild(cm)
    },
    rem: function (c) {
        document.getElementsByTagName('body')[0].parentNode.removeChild(c)
    },
    initial: function (dx) {
        for (var i in dx) {
            this.add(document.createElement(dx[i]))
        }
    },
    cel: function (el, id) {
        let div = document.createElement(el)
        if (id) { div.id = id }
        return div
    },
    header: function () {
        let div = this.cel('div', 'top-header')
        let nv = this.cel('nav')
        let btn = this.cel('div', "menu")
        let ul = this.cel('ul')
        let hm = this.cel('div', 'header-image-menu')
        let logo = this.cel('div', 'logo')
        logo.appendChild(this.cel('img', 'logo'))
        hm.appendChild(this.cel('img', 'slide'))
        div.appendChild(logo)
        btn.appendChild(ul)
        nv.appendChild(btn)
        div.appendChild(nv)
        div.appendChild(hm)
        document.getElementsByTagName('header')[0].appendChild(div)
        this.ul([['Home', '#'], ['profil', '#'], ['program', '#'], ['peraturan', '#'], ['pengaduan', '#']])
    },
    ul: function (btn) {
        let bul = document.getElementsByTagName('ul')[0]
        for (var i in btn) {
            let [t, h] = [btn[i][0], btn[i][1]]
            bul.appendChild(this.li(t, h))
        }
    },
    li: function (t, l) {
        let a = document.createElement('a')
        let li = document.createElement('li')
        a.href = l
        a.innerHTML = t
        li.appendChild(a)
        return li
    },
}
