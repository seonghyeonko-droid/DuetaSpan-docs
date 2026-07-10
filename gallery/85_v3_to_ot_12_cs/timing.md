# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Robin",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "home",
#       "text": "User's home address is 926 Oak Avenue."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엘레나 길버트는 누구랑 사귀어? | S2 어, 진짜? 그럼 결국 누구랑 끝을 맺어? | S3 근데 스테판이랑 엘레나는 얼마나 오래 사귄 거야? | S4 드라마 엄청 많네!

     0.00s  user  발화 시작: 엘레나 길버트는 누구랑 사귀어?
     1.86s  user  발화 시작: 뱀파이어 다이어리에서 누구랑 데이트해?
     1.98s  user  발화 끝
     4.01s  <ret> 발화 (turn2 첫 프레임)
     4.33s  agent 발화 시작: <ret> 음, 엘레나는 꽤나 다사다난한 연애 생활을 했어! 드라마 동안 스테판하고 데이먼 살바토레 둘 다 
     4.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: Elena Gilbert dates both Stefan and Damon Salvatore throughout The Vam
     4.53s  user  발화 끝
    11.97s  user  발화 시작: 어, 진짜? 그럼 결국 누구랑 끝을 맺어?
    12.12s  agent 발화 끝
    14.32s  <ret> 발화 (turn4 첫 프레임)
    14.71s  agent 발화 시작: <ret> 좀 복잡하긴 한데, 결국 엘레나는 마지막에 데이먼 살바토레랑 함께해.
    14.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.22s]: Elena ultimately chooses Damon Salvatore in the series finale of The V
    14.83s  user  발화 끝
    16.28s  user  발화 시작: 그래.
    16.87s  user  발화 끝
    19.86s  user  발화 시작: 흠, 그렇구나. 스테판이랑 맺어졌다고 생각했는데.
    19.94s  agent 발화 끝
    23.64s  agent 발화 시작: 스테판이랑 연결된 모습이 많이 보여서 그럴 수도 있어—
    23.84s  user  발화 끝
    26.53s  user  발화 시작: 근데 스테판이랑 엘레나는 얼마나 오래 사귄 거야?
    27.25s  agent 발화 끝
    29.12s  <ret> 발화 (turn9 첫 프레임)
    29.36s  agent 발화 시작: <ret> 대략 두 시즌 동안 주된 커플이었는데, 이야기가 워낙 복잡하잖아.
    29.36s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.58s]: Stefan and Elena were in a primary romantic relationship for two seaso
    29.53s  user  발화 끝
    32.42s  user  발화 시작: 음.
    32.92s  user  발화 끝
    33.95s  agent 발화 끝
    33.96s  user  발화 시작: 데이먼은? 데이먼이랑은 얼마나 만났어?
    36.56s  <ret> 발화 (turn12 첫 프레임)
    36.96s  agent 발화 시작: <ret> 데이먼하고 엘레나 관계는 대략 세 시즌 정도 지속됐어. 물론 중간에 잠시 멈추는 부분도 있었고.
    36.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Damon and Elena were together for approximately three seasons, with in
    37.20s  user  발화 끝
    43.30s  user  발화 시작: 드라마 엄청 많네!
    43.45s  agent 발화 끝
    44.68s  agent 발화 시작: 정말 그래! 뱀파이어 요소가 없어도 연애는 복잡하잖아. 결국 진정으로 마음이 맞는 사람을 찾는 게 중요하지 
    44.77s  user  발화 끝
    51.85s  agent 발화 끝
