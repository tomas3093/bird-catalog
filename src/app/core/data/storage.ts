import { SpeciesGroupModel, SpeciesModel } from './model';
import { accentorsGroups, accentorsSpecies } from './species/accentors';
import { beeEatersEtAlGroups, beeEatersEtAlSpecies } from './species/bee-eaters-et-al';
import { birdsOfPreyGroups, birdsOfPreySpecies } from './species/birds-of-prey';
import { buntingsGroups, buntingsSpecies } from './species/buntings';
import { bustardGroups, bustardSpecies } from './species/bustard';
import { cormorantsGroups, cormorantsSpecies } from './species/cormorants';
import { craneGroups, craneSpecies } from './species/crane';
import { crowsGroups, crowsSpecies } from './species/crows';
import { cuckooGroups, cuckooSpecies } from './species/cuckoo';
import { finchesCrossbillGroups, finchesCrossbillSpecies } from './species/finches-crossbill';
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
import { shrikesGroups, shrikesSpecies } from './species/shrikes';
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
  ...ternsGroups(),
  ...gullsGroups(),
  ...wildfowlGroups(),
  ...gamefowlGroups(),
  ...loonsGroups(),
  ...grebesGroups(),
  ...cormorantsGroups(),
  ...heronsStorksEtAlGroups(),
  ...railsCrakesGroups(),
  ...craneGroups(),
  ...bustardGroups(),
  ...pigeonsDovesGroups(),
  ...cuckooGroups(),
  ...owlsGroups(),
  ...nightjarGroups(),
  ...swiftsGroups(),
  ...kingfisherGroups(),
  ...beeEatersEtAlGroups(),
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
  ...finchesCrossbillGroups(),
  ...buntingsGroups(),
];

export const species: SpeciesModel[] = [
  ...birdsOfPreySpecies(),
  ...sparrowsSpecies(),
  ...wadersSpecies(),
  ...ternsSpecies(),
  ...gullsSpecies(),
  ...wildfowlSpecies(),
  ...gamefowlSpecies(),
  ...loonsSpecies(),
  ...grebesSpecies(),
  ...cormorantsSpecies(),
  ...heronsStorksEtAlSpecies(),
  ...railsCrakesSpecies(),
  ...craneSpecies(),
  ...bustardSpecies(),
  ...pigeonsDovesSpecies(),
  ...cuckooSpecies(),
  ...owlsSpecies(),
  ...nightjarSpecies(),
  ...swiftsSpecies(),
  ...kingfisherSpecies(),
  ...beeEatersEtAlSpecies(),
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
  ...finchesCrossbillSpecies(),
  ...buntingsSpecies(),
];
