<template>
  <div class="grid">
    <ConfirmDialog></ConfirmDialog>
    <Toast />
    <div class="col-12">
      <div class="card">
        <div class="grid formgrid">
          <h5 class="col-12 lg:col-11">{{ title }}</h5>
          <p class="col-12 lg:col-1">{{ game?.status }}</p>
          <div class="col-12 lg:col-4">
            <img :src="getImage(urlImage)" width="300"/>
          </div>
          <div class="col-12 lg:col-7">
            <div class="field grid">
              <label for="title" class="col-fixed" style="width: 100px"
                >Title :
              </label>
              <InputText class="w-11 lg:w-8" type="text" v-model="title"/>
            </div>
            <div class="field grid">
              <label for="urlImage" class="col-fixed" style="width: 100px"
                >Url image :
              </label>
              <InputText class="w-11 lg:w-8" type="text" v-model="urlImage"/>
            </div>
            <div class="field grid">
              <label for="release" class="col-fixed" style="width: 100px"
                >Release :
              </label>
              <Calendar v-model="release" dateFormat="yy-mm-dd" />
            </div>
            <div class="field grid">
              <label for="platforms" class="col-fixed" style="width: 100px"
                >Platforms :
              </label>
              <MultiSelect
                v-model="selectedPlatforms"
                :options="allplatforms"
                placeholder="Select platforms"
              />
            </div>
            <div class="field grid">
              <label for="genres" class="col-fixed" style="width: 100px"
                >Genres :
              </label>
              <MultiSelect
                v-model="selectedGenres"
                :options="allgenres"
                placeholder="Select genres"
              />
            </div>
            <div class="field grid">
              <label for="publisher" class="col-fixed" style="width: 100px"
                >Publisher :
              </label>
              <InputText class="w-11 lg:w-8" type="text" v-model="publisher"/>
            </div>
            <div class="field grid">
              <label for="description" class="col-fixed" style="width: 100px"
                >Description :
              </label>
              <Textarea
                v-model="description"
                :autoResize="true"
                rows="10"
                cols="80"
              />
            </div>
            <div class="field grid">
              <label for="rating" class="col-fixed" style="width: 100px"
                >Rating :
              </label>
              <InputNumber
                id="minmax-buttons"
                v-model="rating"
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
              />
            </div>
            <div class="field grid">
              <label for="rating" class="col-fixed" style="width: 100px"
                >Status :
              </label>
              <SelectButton v-model="status" :options="options"/>
            </div>
          </div>
          <div class="col-12 lg:col-1">
            <Knob v-model="rating" :valueColor="ratingColor" />
          </div>
          <div class="col-3 lg:col-11 text-right">
            <Button class="p-button-sm" @click="save">Save</Button>
          </div>
          <div class="col-3 lg:col-1">
            <Button class="p-button-sm" @click="cancel">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import imageGetter from '../config/imageGetter.js';

export default {
  props: ["id"],
  mixins: [imageGetter],
  videoGameService: null,
  data() {
    return {
      game: null,
      options: ['AVAILABLE', 'UNAVAILABLE'],
      selectedGenres: null,
      allgenres: [
        "Role Playing",
        "Racing",
        "Simulation",
        "Sports",
        "Strategy",
        "Adventure",
        "Casual",
        "Indie",
        "Puzzle",
        "Family",
        "Platformer",
      ],
      selectedPlatforms: null,
      allplatforms: [
        "PC",
        "Nintendo",
        "DS",
        "XBox",
        "Playstation 1",
        "Playstation 2",
        "Playstation 3",
        "Playstation 4",
        "Playstation 5",
        "Nintendo Switch",
        "Wii",
      ],
      rating: 0,
      publsher: null,
      urlImage: null,
      description: null,
      title: null,
      status: "AVAILABLE",
      release: null
    };
  },
  created() {
    this.videoGameService = this.servicesFactory.getGamesService();
  },
  mounted() {
    this.videoGameService.getGameById(this.id).then((data) => {
      this.game = data;
      this.rating = this.game?.rating;
      this.selectedGenres = this.game?.genres;
      this.selectedPlatforms = this.game?.platforms;
      this.publisher = this.game?.publisher;
      this.urlImage = this.game?.image;
      this.description = this.game?.description;
      this.title = this.game?.title;
      this.status = this.game?.status;
      this.release = this.game?.release;
    });
  },
  computed: {
    ratingColor() {
      return this.rating > 50 ? "green" : "orange";
    },
  },
  methods: {
		save() {
      var pattern = new RegExp('(http|https)://')
      if(pattern.test(this.urlImage) || !this.urlImage){
        this.game.rating = this.rating;
        this.game.description = this.description;
        this.game.image = this.urlImage;
        this.game.genres = this.selectedGenres;
        this.game.platforms = this.selectedPlatforms;
        this.game.publisher = this.publisher;
        this.game.title = this.title;
        this.game.status = this.status;
        this.game.release = dayjs(this.release).format('YYYY-MM-DD');

        this.videoGameService.saveGame(this.game);
        this.$router.push(`/gamedetail/${this.id}`);
      }
      else{
        this.$toast.add({severity:'info', summary:'Failed', detail:'Wrong url for image', life: 3000});
      }
		},
    cancel() {
      this.$router.push(`/gamedetail/${this.id}`);
    }
	},
  beforeRouteLeave (to, from , next) {
    if(this.game.rating != this.rating ||
      this.game.description != this.description ||
      this.game.image != this.urlImage ||
      this.game.genres != this.selectedGenres ||
      this.game.platforms != this.selectedPlatforms ||
      this.game.publisher != this.publisher ||
      this.game.title != this.title ||
      this.game.status != this.status ||
      this.game.release != dayjs(this.release).format('YYYY-MM-DD')){
        this.$confirm.require({
          message: 'Do you really want to leave? you have unsaved changes!',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
              next();
          },
          reject: () => {
              this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
              next(false);
          }
        });
    }
    else {
      next();
    }
  }
};
</script>