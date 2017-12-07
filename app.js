var members = [
  {
    name: "Dre",
    gifts: [
      {
        gift: "xbox",
        claimed: false,
        claimee: null
      },
      {
        gift: "Desktop",
        claimed: false,
        claimee: null
      }
    ]
  },
  {
    name: "Lydia",
    gifts: [
      {
        gift: "Car",
        claimed: false,
        claimee: null
      },
      {
        gift: "Sweater",
        claimed: false,
        claimee: null
      }
    ]
  }
]

var app = new Vue({
  el: '#christmas',
  data: {
    members: (localStorage.getItem('members')!==null) ? JSON.parse(localStorage.getItem('members')) : members,
    activeMember: {
      name: 'Dre'
    },
  },
  methods: {
    changeActiveMember: function (member) {
      this.activeMember = member;
    },
    saveActiveMember: function () {
      const memberIndex = this.members.indexOf(this.activeMember);
      if (memberIndex !== -1) {
        localStorage.setItem("members", JSON.stringify(this.members));
        console.log("Information saved");
      } else {
        console.log("Information could not be saved");
      }
    }
  }
});
