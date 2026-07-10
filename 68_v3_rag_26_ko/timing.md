# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "주정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 그레이즈 아나토미 드라마 보셨어요? 너무 재밌잖아요. | S2 엇, 진짜요? 몰랐어요!— | S3 …근데 그 드라마에서 제일 좋아하는 커플은 누구예요? | S4 저도 그 커플이 좋았어요. 두 사람의 관계가 진짜 드라마틱하잖

     0.00s  user  발화 시작: 혹시 그레이즈 아나토미 드라마 보셨어요? 너무 재밌잖아요.
     4.58s  user  발화 끝
     4.67s  agent 발화 시작: 드라마를 즐겨 보시는군요. 저는 사람들의 건강과 습관을 관리하는 걸 돕는 Fioen이에요.
     8.07s  user  발화 시작: 네.
     8.71s  user  발화 끝
     9.81s  user  발화 시작: 아, 네. 그 드라마에서 맥스웰 아담스랑 메레디스 그레이가 결혼하는 거 궁금해요. 언제 결혼했는지 아세요?
     9.94s  agent 발화 끝
    17.47s  <ret> 발화 (turn4 첫 프레임)
    17.78s  agent 발화 시작: <ret> 두 분은 이천구년 사월 오일에, 퇴근 후 즉흥적으로 결혼식을 올렸어요.
    17.79s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.00s]: Meredith Grey and Derek Shepherd get married on April 5, 2009, in a po
    18.01s  user  발화 끝
    19.81s  user  발화 시작: 정말요?
    20.63s  user  발화 끝
    22.78s  agent 발화 끝
    23.34s  user  발화 시작: 엇, 진짜요? 몰랐어요!—
    26.29s  user  발화 시작: …근데 그 드라마에서 제일 좋아하는 커플은 누구예요?
    26.48s  user  발화 끝
    29.41s  agent 발화 시작: 드라마 취향도 정말 다양하네요. 저는 그레이와 셰퍼드 커플의 이야기가 가장 인상 깊었어요.
    29.57s  user  발화 끝
    35.23s  agent 발화 끝
    35.25s  user  발화 시작: 저도 그 커플이 좋았어요. 두 사람의 관계가 진짜 드라마틱하잖아요.
    40.57s  user  발화 끝
    40.64s  agent 발화 시작: 맞아요. 서로에게 힘이 되어주는 모습이 보기 좋았죠. 삶에서 그런 지지적인 관계를 만드는 게 중요해요.
    46.58s  agent 발화 끝
