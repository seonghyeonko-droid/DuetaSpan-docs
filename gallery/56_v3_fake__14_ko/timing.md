# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "태경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 코라 전설에 나오는 불의 군주는 누구야? | S2 혹시 아바타 말고 다른 능력자들도 있었어? | S3 오, 그렇구나. 아앙이랑 토프는 정말 잘 맞았겠다. | S4 혹시 코라가 아앙이랑 친척이야?

     0.00s  user  발화 시작: 아, 코라 전설에 나오는 불의 군주는 누구야?
     2.41s  <ret> 발화 (turn1 첫 프레임)
     2.57s  agent 발화 시작: <ret> 불의 군주는 오자이였는데, 백년 전쟁 동안 화국을 폭압적으로 다스렸다고 해. 꽤 강했던 분이시지.
     2.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: Ozai was the Lord of Fire and the tyrannical ruler of the Fire Nation 
     2.58s  user  발화 끝
     6.52s  user  발화 시작: 응.
     6.84s  user  발화 끝
     9.61s  agent 발화 끝
    11.04s  user  발화 시작: 백년 전쟁이 언제 끝났는데?
    13.00s  <ret> 발화 (turn4 첫 프레임)
    13.12s  user  발화 끝
    13.15s  agent 발화 시작: <ret> 백년 전쟁은 서기 백칠십육년 칠월 사일에, 아앙 아바타가 오자이 군주를 물리치면서 공식적으로 끝났
    13.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: The Hundred Year War officially ended on July 4, 176 AG, with Fire Lor
    20.61s  <ret> 발화 (turn5 첫 프레임)
    21.01s  agent 발화 시작: <ret> 혹시 다른 궁금한 점이 있으신가요? 저는 언제든 도와드릴 준비가 되어 있어요.
    21.01s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.65s]: The current stock price of Tesla (TSLA) is $252.48 as of July 10, 2026
    21.12s  agent 발화 끝
    26.66s  agent 발화 끝
    28.56s  user  발화 시작: 음… 아앙은 불을 어떻게 다루게 됐어?
    31.29s  <ret> 발화 (turn7 첫 프레임)
    31.42s  user  발화 끝
    31.45s  agent 발화 시작: <ret> 아앙은 물, 땅, 불, 공기 네 가지 원소를 모두 다루는 아바타가 돼서, 결국 오자이 군주를 물리
    31.45s  ⚡SPAN 주입 [d'=1.92s / d_lead=6.95s]: Aang mastered all four elements—water, earth, fire, and air—to become 
    34.89s  user  발화 시작: 응.
    35.20s  user  발화 끝
    38.27s  agent 발화 시작: 아바타는 정말 어려운 수련을 거쳐야 한다고 들었어요. 꾸준히 노력하는 모습이 멋지죠.
    38.40s  agent 발화 끝
    44.30s  user  발화 시작: 혹시 아바타 말고 다른 능력자들도 있었어?
    44.75s  agent 발화 끝
    46.64s  <ret> 발화 (turn11 첫 프레임)
    46.96s  agent 발화 시작: <ret> 토프 베이퐁이라는 뛰어난 재능을 가진 소녀가 있었는데, 앞이 보이지 않음에도 불구하고 금속을 다루
    46.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: Toph Beifong was a blind prodigy who became the first metalbending mas
    47.02s  user  발화 끝
    52.84s  user  발화 시작: 어.
    53.15s  user  발화 끝
    55.34s  user  발화 시작: 금속을 다룬다고? 대단하다!
    55.53s  agent 발화 끝
    57.32s  user  발화 끝
    57.34s  agent 발화 시작: 정말 놀랍지 않나요? 토프는 자신의 한계를 뛰어넘는 엄청난 노력을 했다고 해.
    62.76s  agent 발화 끝
    63.56s  user  발화 시작: 아, 그럼 토프는 아앙이랑 같이 싸웠어?
    65.32s  <ret> 발화 (turn16 첫 프레임)
    65.47s  agent 발화 시작: <ret> 네, 토프는 아앙의 팀에 합류해서 오자이 군주와의 최종 전투에서 금속을 다루는 기술을 활용해서 중
    65.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: Toph Beifong joined Team Avatar and played a crucial role in the final
    65.54s  user  발화 끝
    73.26s  user  발화 시작: 오, 그렇구나. 아앙이랑 토프는 정말 잘 맞았겠다.
    73.30s  agent 발화 끝
    77.09s  user  발화 끝
    77.64s  agent 발화 시작: 두 사람은 서로에게 큰 힘이 되어주는 좋은 친구였던 것 같아요. 함께 어려움을 헤쳐나가는 모습이 보기 좋았죠
    79.70s  user  발화 시작: 그래.
    80.53s  user  발화 끝
    84.07s  user  발화 시작: 혹시 코라 전설은 몇 시즌으로 구성됐어?
    84.26s  agent 발화 끝
    86.53s  <ret> 발화 (turn21 첫 프레임)
    86.66s  user  발화 끝
    86.85s  agent 발화 시작: <ret> 코라 전설은 총 네 개의 시즌으로 구성되어 있고, 각 시즌마다 다른 주요 갈등과 코라 아바타의 성
    86.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: The Legend of Korra consists of four books, or seasons, each focusing 
    95.14s  user  발화 시작: 네 시즌이라… 짧은 것 같네.
    95.19s  agent 발화 끝
    97.54s  agent 발화 시작: 네, 아쉽게도 짧지만, 각 시즌마다 꽉 찬 이야기가 담겨 있어서 후회는 없을 거예요.
    97.64s  user  발화 끝
   103.09s  agent 발화 끝
   103.59s  user  발화 시작: 혹시 코라가 아앙이랑 친척이야?
   105.25s  <ret> 발화 (turn25 첫 프레임)
   105.57s  agent 발화 시작: <ret> 코라는 아앙과 카타라의 후손인데, 백년 전쟁이 끝난 지 백칠십년 후에 태어났어.
   105.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: Korra is a descendant of Avatar Aang and Katara, born 170 years after 
   105.58s  user  발화 끝
   108.31s  user  발화 시작: 응.
   108.62s  user  발화 끝
   111.59s  agent 발화 끝
   111.64s  user  발화 시작: 아, 그렇구나. 먼 친척이네.
   114.04s  user  발화 끝
   114.16s  agent 발화 시작: 먼 친척이긴 하지만, 코라도 아앙처럼 아바타로서 세상을 지키는 중요한 역할을 했답니다.
   120.78s  agent 발화 끝
