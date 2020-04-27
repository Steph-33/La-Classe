class employee {
    constructor (m,n,p,dn,de,s){
        this._matricule = m;
        this._nom = n;
        this._prenom = p;
        this._dateNaissance = dn;
        this._dateEmbauche = de;
        this._salaire = s;
    }
    
    getAge() {
        return this.diffYear(this._dateNaissance);
    }

    getAnciennete() {
        return this.diffYear(this._dateEmbauche);
    }

    diffYear(element){
        let Y = element.split('/')[2]
        let M = element.split('/')[1] - 1
        let D = element.split('/')[0]

        var diff = Date.now() - new Date(Y, M, D).getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    getAugmentation(){
        if(this.getAnciennete() < 5){
            return this._salaire *= 1.02;
        } else if(this.getAnciennete() < 10 && this.getAnciennete() >= 5){
            return this._salaire *= 1.05;
        } else {
            return this._salaire *= 1.10;
        }
    }

    afficherEmploye(){
        let titre = document.getElementsByTagName('h1')[0];
        let ul = document.createElement('ul');
        titre.appendChild(ul);

        let li_mat = document.createElement('li');        
        li_mat.innerHTML = ` Matricule : ${this._matricule}`;
        ul.appendChild(li_mat);

        let li_nom = document.createElement('li');
        li_nom.innerHTML = ` Nom Complet : ${this._nom.toUpperCase()} ${this._prenom.substr(0,1).toUpperCase() + this._prenom.substr(1)}`;
        ul.appendChild(li_nom);

        let li_age = document.createElement('li');        
        li_age.innerHTML = ` Âge : ${this.getAge()} ans`;
        ul.appendChild(li_age); 

        let li_ancien = document.createElement('li');        
        li_ancien.innerHTML = ` Ancienneté : ${this.getAnciennete()} années`;
        ul.appendChild(li_ancien);

        let li_salaire = document.createElement('li');        
        li_salaire.innerHTML = ` Salaire : ${this.getAugmentation()} €`;
        ul.appendChild(li_salaire);
    }

    get matricule(){
        return this.matricule;
    }
    set matricule(newMatricule){
        this._matricule = newMatricule;
    }
    
    get nom(){
        return this.nom;
    }
    set nom(newNom){
        this._nom = newNom;
    }
    
    get prenom(){
        return this.prenom;
    }
    set prenom(newPrenom){
        this._prenom = newPrenom;
    }
    
    get dateNaissance(){
        return this.dateNaissance;
    }
    set dateNaissance(newDateNaissance){
        this._dateNaissance = newDateNaissance;
    }
    
    get dateEmbauche(){
        return this.dateEmbauche;
    }
    set dateEmbauche(newDateEmbauche){
        this._dateEmbauche = newDateEmbauche;
    }
    
    get salaire(){
        return this.salaire;
    }
    set salaire(newSalaire){
        this._salaire = newSalaire;
    }
}

let steph = new employee('007','paterna','stéphane','28/08/1975','12/01/1999',38000);
let yoram = new employee('008','taieb','yoram','30/01/2001','15/02/2017',45000);

steph.afficherEmploye();
yoram.afficherEmploye();
