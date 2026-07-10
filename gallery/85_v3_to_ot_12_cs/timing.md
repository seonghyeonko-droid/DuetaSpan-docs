# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Nora",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, "Three Little Pigs"라는 노래를 부 | S2 만화 영화 사운드트랙인 줄 알았어요. | S3 여보, 쓰레기 버렸어요? | S4 그럼, Green Jellÿ는 또 뭘 하나요? 다른 노래로도 

     0.00s  user  발화 시작: 안녕하세요, "Three Little Pigs"라는 노래를 부른 가수가 누구인지 아세요? 계속 생각나서요.
     6.24s  <ret> 발화 (turn1 첫 프레임)
     6.38s  user  발화 끝
     6.55s  agent 발화 시작: <ret> 아, 그거 재미있는 노래죠! 사실 Green Jellÿ라는 패러디 메탈 밴드가 부른 노래예요.
     6.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Green Jellÿ is an American parody metal band formed in 1989.
    12.79s  user  발화 시작: Green Jellÿ요? 좀… 뜻밖인데요. 제가…
    12.80s  agent 발화 끝
    16.77s  user  발화 끝
    18.62s  user  발화 시작: 만화 영화 사운드트랙인 줄 알았어요.
    20.88s  agent 발화 시작: 하하, 정말 놀랍죠, 그렇지 않나요? 때로는 가장 기억에 남는 노래가 숨겨진 기원을 가지고 있기도 해요.
    20.93s  user  발화 끝
    28.58s  user  발화 시작: 여보, 쓰레기 버렸어요?
    28.80s  agent 발화 끝
    30.43s  user  발화 시작: 그럼, Green Jellÿ는 또 뭘 하나요? 다른 노래로도 유명한가요?
    30.57s  user  발화 끝
    34.76s  <ret> 발화 (turn7 첫 프레임)
    35.16s  agent 발화 시작: <ret> 음, 그들은 천구백구십이년에 첫 앨범을 발표했는데, “Three Little Pigs”와 “Cer
    35.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: Green Jellÿ released their debut album, "Green Jellÿ," in 1992, and it
    35.29s  user  발화 끝
    43.88s  agent 발화 끝
