# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Marie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Zin, I’ve got a riddle for you. | S2 A puzzlers’ league? That's… fittin | S3 That’s… a lot of vowels. | S4 Okay, wow. I definitely won't be u

     0.00s  user  발화 시작: Hi Zin, I’ve got a riddle for you. What’s the longest word i
     6.15s  agent 발화 시작: That’s a classic! It’s always fun to ponder these linguistic
     6.15s  user  발화 끝
    15.18s  user  발화 시작: Yeah.
    15.18s  agent 발화 끝
    15.59s  user  발화 시작: I’d like you to tell me the answer, if you know it.
    15.59s  user  발화 끝
    20.12s  <ret> 발화 (turn4 첫 프레임)
    20.52s  agent 발화 시작: <ret> The longest word in the dictionary is pneumonoultramic
    20.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.90s]: Pneumonoultramicroscopicsilicovolcanoconiosis is a lung disease caused
    20.52s  user  발화 끝
    32.42s  user  발화 시작: Wow, that *is* long! Is it a real disease, though?
    32.42s  agent 발화 끝
    36.12s  <ret> 발화 (turn6 첫 프레임)
    36.52s  agent 발화 시작: <ret> Yes, it is a real disease, though quite rare; pneumono
    36.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: Pneumonoultramicroscopicsilicovolcanoconiosis is a real, though very r
    36.52s  user  발화 끝
    42.67s  user  발화 시작: That’s amazing! Who made up such a word?
    42.67s  agent 발화 끝
    45.96s  agent 발화 시작: Yeah.
    45.96s  user  발화 끝
    46.05s  <ret> 발화 (turn9 첫 프레임)
    46.37s  agent 발화 시작: <ret> Everett M. Smith, president of the National Puzzlers’ 
    46.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: Everett M. Smith, president of the National Puzzlers’ League, is credi
    46.37s  agent 발화 끝
    52.11s  user  발화 시작: A puzzlers’ league? That's… fitting.
    52.11s  agent 발화 끝
    54.16s  agent 발화 시작: It really is, isn’t it? I find it fascinating how language c
    54.16s  user  발화 끝
    64.01s  user  발화 시작: So, it’s not a commonly diagnosed condition then?
    64.01s  agent 발화 끝
    67.29s  agent 발화 시작: No, not at all. It's more of a linguistic curiosity than a w
    67.29s  user  발화 끝
    75.91s  user  발화 시작: Right. Um…
    75.91s  agent 발화 끝
    76.73s  user  발화 시작: …do you know what the longest place name is?
    76.73s  user  발화 끝
    80.18s  <ret> 발화 (turn16 첫 프레임)
    80.42s  agent 발화 시작: <ret> The longest place name is Taumatawhakatangihangakoauau
    80.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: (tool result) Taumatawhakatangihangakoauauotamateaturipukakapikimaunga
    80.42s  user  발화 끝
    85.76s  user  발화 시작: That’s… a lot of vowels.
    85.76s  agent 발화 끝
    87.81s  agent 발화 시작: It certainly is! It’s a Māori name, and those languages ofte
    87.81s  user  발화 끝
    96.84s  user  발화 시작: I wonder if it’s hard for locals to say?
    96.84s  agent 발화 끝
   100.53s  agent 발화 시작: Yeah.
   100.53s  user  발화 끝
   100.94s  agent 발화 시작: I imagine it takes some practice! It’s said to describe the 
   100.94s  agent 발화 끝
   111.61s  user  발화 시작: Mhm.
   111.61s  agent 발화 끝
   112.02s  user  발화 시작: That’s a lovely story. Do you know any other really long wor
   112.02s  user  발화 끝
   116.94s  agent 발화 시작: I do! There's also…
   116.94s  user  발화 끝
   118.58s  agent 발화 시작: There's also methionylthreonylthreonylglutaminylarginyl… —
   118.58s  agent 발화 끝
   120.22s  user  발화 시작: …Actually, wait, can you spell that first one again? The New
   120.22s  agent 발화 끝
   125.56s  agent 발화 시작: It's Taumatawhakatangihangakoauauotamateaturipukakapikimaung
   125.56s  user  발화 끝
   126.38s  user  발화 시작: Okay, wow. I definitely won't be using that one in conversat
   126.38s  agent 발화 끝
   130.89s  agent 발화 시작: Mm-hmm.
   130.89s  user  발화 끝
   131.30s  agent 발화 시작: I suspect not! It’s more of a fun fact to share than a pract
   131.30s  agent 발화 끝
   139.92s  user  발화 시작: Definitely. It makes "pneumonoultramicroscopicsilicovolcanoc
   139.92s  agent 발화 끝
   142.38s  agent 발화 시작: It does put things into perspective, doesn’t it? Both are ex
   142.38s  user  발화 끝
   150.18s  user  발화 시작: Yeah.
   150.18s  agent 발화 끝
   150.59s  user  발화 시작: It’s kind of amazing what people come up with.
   150.59s  user  발화 끝
   154.28s  agent 발화 시작: It is, isn't it? Language is a constantly evolving thing, re
   154.28s  user  발화 끝
   165.77s  agent 발화 끝
