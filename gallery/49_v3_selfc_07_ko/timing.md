# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "현진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-22",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 작년에 나온 캐럴 좀… | S2 샘 스미스… 그거 괜찮았지. 이번 주말에 영화 볼까? | S3 배드 보이즈… 그거 볼까. 지금 바로 예매해 줘. | S4 좋아, 뭔가 편안한 음악 틀어 줘.

     0.00s  user  발화 시작: 음, 작년에 나온 캐럴 좀…
     2.08s  user  발화 끝
     3.20s  user  발화 시작: …찾아줄래? 두 천 이십삼 년 거.
     5.39s  <ret> 발화 (turn2 첫 프레임)
     5.63s  agent 발화 시작: <ret> 두 천 이십삼 년에는 머라이어 캐리가 "All I Want for Christmas Is You 
     5.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) In 2023, Mariah Carey released “All I Want for Christmas
     5.64s  user  발화 끝
    14.47s  agent 발화 끝
    14.63s  user  발화 시작: 아, 부블레… 아니, 이천이십이년 캐럴은? 이천이십이년으로 다시 해 줘.
    19.22s  <ret> 발화 (turn4 첫 프레임)
    19.53s  agent 발화 시작: <ret> 두 천 이십이 년에는 브렌다 리의 "Rockin’ Around the Christmas Tree"
    19.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: (tool result) In 2022, Brenda Lee’s “Rockin’ Around the Christmas Tree
    19.63s  user  발화 끝
    22.60s  user  발화 시작: 응.
    23.09s  user  발화 끝
    28.82s  user  발화 시작: 샘 스미스… 그거 괜찮았지. 이번 주말에 영화 볼까?
    28.89s  agent 발화 끝
    31.95s  user  발화 끝
    31.96s  agent 발화 시작: 주말에 영화를 보시는군요. 어떤 영화를 보고 싶으세요?
    35.80s  agent 발화 끝
    35.99s  user  발화 시작: 글쎄, 뭐 재미있는 거… 음, 액션 영화 있나?
    39.41s  <ret> 발화 (turn9 첫 프레임)
    39.65s  agent 발화 시작: <ret> 현재 상영 중인 액션 영화로는 "Bad Boys: Ride or Die", "Kingdom of 
    39.66s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.58s]: (tool result) Currently showing action films include "Bad Boys: Ride o
    39.82s  user  발화 끝
    45.94s  user  발화 시작: 어어.
    46.57s  user  발화 끝
    47.84s  user  발화 시작: 배드 보이즈… 그거 볼까. 지금 바로 예매해 줘.
    48.23s  agent 발화 끝
    50.95s  <ret> 발화 (turn12 첫 프레임)
    51.02s  agent 발화 시작: <ret> 네, "Bad Boys: Ride or Die" 티켓 두 장이 칠월 십일일 토요일 오후 일곱시에 
    51.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.87s]: (tool result) Confirmation ID: 7X9L2. Two tickets for "Bad Boys: Ride 
    51.08s  user  발화 끝
    57.61s  user  발화 시작: 우와.
    58.10s  user  발화 끝
    62.89s  agent 발화 끝
    62.94s  user  발화 시작: 고마워. 아, 그런데 지금 몇 시야?
    65.01s  <ret> 발화 (turn15 첫 프레임)
    65.32s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 사십칠분입니다.
    65.33s  user  발화 끝
    65.33s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.63s]: (tool result) It is Friday, July 10, 2026 at 3:47 PM in Asia/Seoul rig
    67.45s  user  발화 시작: 와.
    67.94s  user  발화 끝
    69.57s  user  발화 시작: 벌써? 시간이 빠르네…
    69.95s  agent 발화 끝
    70.95s  agent 발화 시작: 시간이 빠르게 흘러가는 건 어쩔 수 없죠. 혹시 스트레스 해소에 도움이 될 만한 음악을 추천해 드릴까요?
    70.95s  user  발화 끝
    77.46s  user  발화 시작: 좋아, 뭔가 편안한 음악 틀어 줘.
    77.67s  agent 발화 끝
    80.18s  user  발화 끝
    80.28s  <ret> 발화 (turn20 첫 프레임)
    80.35s  agent 발화 시작: <ret> 지금 Marconi Union의 "Weightless"를 재생합니다. 편안하게 휴식을 취하세요.
    80.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Now playing: "Weightless" by Marconi Union.
    82.70s  user  발화 시작: 그치.
    83.11s  user  발화 끝
    85.34s  user  발화 시작: 아, 좋다… 고마워, 사리.
    85.40s  agent 발화 끝
    86.95s  user  발화 끝
    87.25s  agent 발화 시작: 천만에요.
    88.06s  agent 발화 끝
