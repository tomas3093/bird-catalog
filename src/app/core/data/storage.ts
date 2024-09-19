import { SpeciesGroupModel, SpeciesModel } from './model';
import { accentorsGroups, accentorsSpecies } from './species/accentors';
import { beeEatersEtAlGroups, beeEatersEtAlSpecies } from './species/bee-eaters-et-al';
import { birdsOfPreyGroups, birdsOfPreySpecies } from './species/birds-of-prey';
import { buntingsGroups, buntingsSpecies } from './species/buntings';
import { bustardsGroups, bustardsSpecies } from './species/bustards';
import { cormorantsPelicansGroups, cormorantsPelicansSpecies } from './species/cormorants-pelicans';
import { cranesGroups, cranesSpecies } from './species/cranes';
import { crowsGroups, crowsSpecies } from './species/crows';
import { cuckoosGroups, cuckoosSpecies } from './species/cuckoos';
import { exoticGroups, exoticSpecies } from './species/exotic';
import { finchesCrossbillsGroups, finchesCrossbillsSpecies } from './species/finches-crossbills';
import { flycatchersGroups, flycatchersSpecies } from './species/flycatchers';
import { gamefowlGroups, gamefowlSpecies } from './species/gamefowl';
import { grebesGroups, grebesSpecies } from './species/grebes';
import { gullsGroups, gullsSpecies } from './species/gulls';
import { heronsStorksEtAlGroups, heronsStorksEtAlSpecies } from './species/herons-storks-et-al';
import { kingfisherGroups, kingfisherSpecies } from './species/kingfisher';
import { larksGroups, larksSpecies } from './species/larks';
import { loonsGroups, loonsSpecies } from './species/loons';
import { nightjarGroups, nightjarSpecies } from './species/nightjar';
import { nuthatchCreepersGroups, nuthatchCreepersSpecies } from './species/nuthatch-creepers';
import { owlsGroups, owlsSpecies } from './species/owls';
import { pigeonsDovesGroups, pigeonsDovesSpecies } from './species/pigeons-doves';
import { pipitsWagtailsGroups, pipitsWagtailsSpecies } from './species/pipits-wagtails';
import { railsCrakesGroups, railsCrakesSpecies } from './species/rails-crakes';
import { sandgrouseGroups, sandgrouseSpecies } from './species/sandgrouse';
import { shrikesGroups, shrikesSpecies } from './species/shrikes';
import { skuasGroups, skuasSpecies } from './species/skuas';
import { sparrowsGroups, sparrowsSpecies } from './species/sparrows';
import { starlingsOrioleGroups, starlingsOrioleSpecies } from './species/starlings-oriole';
import { swallowsMartinsGroups, swallowsMartinsSpecies } from './species/swallows-martins';
import { swiftsGroups, swiftsSpecies } from './species/swifts';
import { ternsGroups, ternsSpecies } from './species/terns';
import { titsEtAlGroups, titsEtAlSpecies } from './species/tits-et-al';
import { trushesChatsGroups, trushesChatsSpecies } from './species/trushes-chats';
import { wadersGroups, wadersSpecies } from './species/waders';
import { warblersGroups, warblersSpecies } from './species/warblers';
import { waxwingGroups, waxwingSpecies } from './species/waxwing';
import { wildfowlGroups, wildfowlSpecies } from './species/wildfowl';
import { woodpeckersGroups, woodpeckersSpecies } from './species/woodpeckers';
import { wrenDipperGroups, wrenDipperSpecies } from './species/wren-dipper';

export const groups: SpeciesGroupModel[] = [
  ...birdsOfPreyGroups(),
  ...sparrowsGroups(),
  ...wadersGroups(),
  ...skuasGroups(),
  ...ternsGroups(),
  ...sandgrouseGroups(),
  ...gullsGroups(),
  ...wildfowlGroups(),
  ...gamefowlGroups(),
  ...loonsGroups(),
  ...grebesGroups(),
  ...cormorantsPelicansGroups(),
  ...heronsStorksEtAlGroups(),
  ...railsCrakesGroups(),
  ...cranesGroups(),
  ...bustardsGroups(),
  ...pigeonsDovesGroups(),
  ...cuckoosGroups(),
  ...owlsGroups(),
  ...nightjarGroups(),
  ...swiftsGroups(),
  ...kingfisherGroups(),
  ...beeEatersEtAlGroups(),
  ...exoticGroups(),
  ...woodpeckersGroups(),
  ...larksGroups(),
  ...swallowsMartinsGroups(),
  ...pipitsWagtailsGroups(),
  ...wrenDipperGroups(),
  ...waxwingGroups(),
  ...accentorsGroups(),
  ...trushesChatsGroups(),
  ...warblersGroups(),
  ...flycatchersGroups(),
  ...titsEtAlGroups(),
  ...nuthatchCreepersGroups(),
  ...shrikesGroups(),
  ...crowsGroups(),
  ...starlingsOrioleGroups(),
  ...finchesCrossbillsGroups(),
  ...buntingsGroups(),
];

export const species: SpeciesModel[] = [
  ...birdsOfPreySpecies(),
  ...sparrowsSpecies(),
  ...wadersSpecies(),
  ...skuasSpecies(),
  ...ternsSpecies(),
  ...sandgrouseSpecies(),
  ...gullsSpecies(),
  ...wildfowlSpecies(),
  ...gamefowlSpecies(),
  ...loonsSpecies(),
  ...grebesSpecies(),
  ...cormorantsPelicansSpecies(),
  ...heronsStorksEtAlSpecies(),
  ...railsCrakesSpecies(),
  ...cranesSpecies(),
  ...bustardsSpecies(),
  ...pigeonsDovesSpecies(),
  ...cuckoosSpecies(),
  ...owlsSpecies(),
  ...nightjarSpecies(),
  ...swiftsSpecies(),
  ...kingfisherSpecies(),
  ...beeEatersEtAlSpecies(),
  ...exoticSpecies(),
  ...woodpeckersSpecies(),
  ...larksSpecies(),
  ...swallowsMartinsSpecies(),
  ...pipitsWagtailsSpecies(),
  ...wrenDipperSpecies(),
  ...waxwingSpecies(),
  ...accentorsSpecies(),
  ...trushesChatsSpecies(),
  ...warblersSpecies(),
  ...flycatchersSpecies(),
  ...titsEtAlSpecies(),
  ...nuthatchCreepersSpecies(),
  ...shrikesSpecies(),
  ...crowsSpecies(),
  ...starlingsOrioleSpecies(),
  ...finchesCrossbillsSpecies(),
  ...buntingsSpecies(),
];
