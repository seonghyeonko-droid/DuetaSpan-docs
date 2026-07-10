# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "라국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
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
#     },
#     {
#       "date": "2025-11-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 뱀파이어 다이어리에서 엘레나는 누구랑 사귀어? | S2 다른 사람이랑도 사귀었어? | S3 … 데이먼이랑 엘레나가 처음 만났을 때는 어땠어? | S4 복잡하다니, 무슨 뜻이야?

     0.00s  user  발화 시작: 뱀파이어 다이어리에서 엘레나는 누구랑 사귀어?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     2.96s  user  발화 끝
     3.00s  agent 발화 시작: <ret> 뱀파이어 다이어리에서 엘레나 길버트가 가장 깊이 사랑한 사람은 스테판 살바토레예요.
     3.00s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.91s]: Elena Gilbert’s primary love interest throughout the series is Stefan 
     7.90s  agent 발화 끝
     8.22s  user  발화 시작: 음, 스테판이랑은 오래 사귀었지.
    10.33s  agent 발화 시작: 맞아요, 두 사람은 정말 오래도록 서로에게 끌렸죠. 관계를 통해 많은 것을 배워요.
    10.58s  user  발화 끝
    11.86s  user  발화 시작: 어어.
    12.69s  user  발화 끝
    15.24s  agent 발화 끝
    17.55s  user  발화 시작: 다른 사람이랑도 사귀었어?
    18.88s  <ret> 발화 (turn6 첫 프레임)
    19.12s  agent 발화 시작: <ret> 엘레나는 스테판의 동생인 데이먼 살바토레와도 중요한 관계를 맺었어요.
    19.12s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.98s]: Elena also had a significant relationship with Damon Salvatore, Stefan
    19.16s  user  발화 끝
    21.81s  user  발화 시작: 그래.
    22.58s  user  발화 끝
    23.10s  agent 발화 끝
    23.11s  agent 발화 시작: 데이먼과의 관계는 스테판과의 관계와는 또 다른 매력이 있었죠—
    25.77s  user  발화 시작: … 데이먼이랑 엘레나가 처음 만났을 때는 어땠어?
    26.43s  agent 발화 끝
    28.46s  agent 발화 시작: 처음 만났을 때는 서로에게 적대적이었어요. 긴장감이 감도는 관계였죠.
    28.68s  user  발화 끝
    32.69s  <ret> 발화 (turn11 첫 프레임)
    32.80s  agent 발화 끝
    32.84s  agent 발화 시작: <ret> 시간이 지나면서 서로를 이해하게 되었고, 결국에는 깊은 사랑에 빠지게 되었답니다. 적대감에서 시작
    34.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: Their relationship evolved from animosity to a passionate and complex 
    43.18s  agent 발화 끝
    43.36s  user  발화 시작: 복잡하다니, 무슨 뜻이야?
    45.15s  agent 발화 시작: 두 사람의 성격 차이도 있었고, 주변 상황도 복잡하게 얽혀 있었기 때문이에요.
    45.33s  user  발화 끝
    49.55s  agent 발화 끝
