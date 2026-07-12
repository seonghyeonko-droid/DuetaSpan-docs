# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Ruby",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "home",
#       "text": "User's home address is 332 Cedar Lane."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 오늘 기분 어때? | S2 그럼, 삼 stone이면 파운드로 얼마나 돼? | S3 정말? 체중으로? 흥미롭네. | S4 분수도 엄청 많네!

     0.00s  user  발화 시작: 안녕, 오늘 기분 어때?
     2.08s  agent 발화 시작: 정말 잘 지내요, 물어봐 주셔서 감사합니다! 이야기하고 싶은 게 있다면 언제든지 편하게 말씀해 주세요.
     2.08s  user  발화 끝
     9.36s  user  발화 시작: 그래.
     9.36s  agent 발화 끝
     9.88s  user  발화 시작: 근데, 일 stone이 몇 파운드인지 궁금해.
     9.88s  user  발화 끝
    12.60s  <ret> 발화 (turn4 첫 프레임)
    13.00s  agent 발화 시작: <ret> 일 stone은 십사 파운드와 같아요.
    13.00s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.60s]: A stone is equal to fourteen pounds—that's one of those traditional un
    13.00s  user  발화 끝
    15.60s  user  발화 시작: 아, 그래. 알아두면 좋네.
    15.60s  agent 발화 끝
    17.68s  agent 발화 시작: 정말 그렇죠! 요리 레시피를 보거나 오래된 글을 읽을 때 꽤 유용할 수 있어요.
    17.68s  user  발화 끝
    24.44s  user  발화 시작: [laugh] 진짜! 옛날 책에서 봤어.
    24.44s  agent 발화 끝
    27.04s  agent 발화 시작: [happy] 옛날 책들은 stone을 정말 좋아하죠, 그렇지 않나요? 과거의 매력적인 특징 중 하나예요.
    27.04s  user  발화 끝
    33.80s  user  발화 시작: 어.
    33.80s  agent 발화 끝
    34.32s  user  발화 시작: 그럼, 삼 stone이면 파운드로 얼마나 돼?
    34.32s  user  발화 끝
    37.12s  <ret> 발화 (turn11 첫 프레임)
    37.44s  agent 발화 시작: <ret> 삼 stone이면 사십이 파운드와 같아요.
    37.44s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.60s]: One stone is equivalent to fourteen pounds, so three stones would equa
    37.44s  user  발화 끝
    40.04s  user  발화 시작: 와, 사십이! 엄청 많네.
    40.04s  agent 발화 끝
    42.12s  agent 발화 시작: 정말 그렇죠! 그렇게 생각하면 꽤 큰 무게라는 걸 알 수 있어요.
    42.12s  user  발화 끝
    47.84s  user  발화 시작: 궁금한데, 영국 사람들은 아직도 stone을 많이 쓰나?
    47.84s  agent 발화 끝
    51.08s  <ret> 발화 (turn15 첫 프레임)
    51.48s  agent 발화 시작: <ret> 예전만큼 많이 쓰지는 않지만, 영국에서는 여전히 체중을 잴 때 stone을 자주 사용해요.
    51.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.24s]: While pounds and kilograms are more common now, stones are still often
    51.48s  user  발화 끝
    57.72s  user  발화 시작: 정말? 체중으로? 흥미롭네.
    57.72s  agent 발화 끝
    59.28s  agent 발화 시작: 약간의 문화적 잔재 같은 거예요. 다른 측정 단위도 있지만, 많은 사람들이 여전히 stone으로 체중을 말해
    59.28s  user  발화 끝
    67.08s  user  발화 시작: 어.
    67.08s  agent 발화 끝
    67.60s  user  발화 시작: 그건… 음, 복싱에 대해 읽고 있었거든.
    67.60s  user  발화 끝
    70.72s  agent 발화 시작: 복싱에서는 체급을 분류할 때 stone을 자주 사용합니다—
    70.72s  user  발화 끝
    74.36s  user  발화 시작: …잠깐, 복싱 단체마다 stone 무게가 다른가?
    74.36s  agent 발화 끝
    77.48s  user  발화 시작: 그래.
    77.48s  user  발화 끝
    77.68s  <ret> 발화 (turn23 첫 프레임)
    78.00s  agent 발화 시작: <ret> 네, 복싱 단체마다 약간씩 무게 제한이 다르지만, 여전히 stone 시스템을 사용합니다.
    78.00s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.72s]: The weight classes in boxing vary slightly between organizations, but 
    78.00s  user  발화 끝
    83.72s  agent 발화 시작: 체급은 다양하지만, 일반적으로 팔 stone 육 파운드, 구 stone 구 파운드, 십 stone 칠 파운드
    83.72s  agent 발화 끝
    93.08s  user  발화 시작: 분수도 엄청 많네!
    93.08s  agent 발화 끝
    94.64s  agent 발화 시작: 조금 복잡할 수 있죠! 스포츠 내에서 매우 정확한 구분이 필요하기 때문이에요.
    94.64s  user  발화 끝
   100.36s  user  발화 시작: 어어.
   100.36s  agent 발화 끝
   100.88s  user  발화 시작: 그럼, 내가 십일 stone이면…
   100.88s  user  발화 끝
   102.64s  <ret> 발화 (turn29 첫 프레임)
   102.96s  agent 발화 시작: <ret> 십일 stone은 백오십사 파운드와 같아요.
   102.96s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.60s]: Eleven stones is equal to one hundred and fifty-four pounds—simply by 
   102.96s  user  발화 끝
   105.56s  user  발화 시작: 맞아.
   105.56s  agent 발화 끝
   106.08s  user  발화 시작: 알겠어. 도와줘서 고마워!
   106.08s  user  발화 끝
   107.64s  agent 발화 시작: 천만에요!
   107.64s  user  발화 끝
   108.16s  agent 발화 끝
