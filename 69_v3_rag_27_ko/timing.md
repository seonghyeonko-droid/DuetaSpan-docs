# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요. | S2 천구백칠십년이라… 혹시 그분은 다른 악기도 다루나요? | S3 그분이 활동하던 시기에 어떤 음악 스타일이 유행했는지 혹시 아 | S4 헤비 메탈도 그때부터였다니, 신기하네요. 룩스 아우룬케 음악에

     0.00s  user  발화 시작: 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     3.38s  user  발화 끝
     3.58s  <ret> 발화 (turn1 첫 프레임)
     3.66s  agent 발화 시작: <ret> 아, 룩스 아우룬케에 대해 알아보고 싶으신 거군요.
     4.86s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.37s]: Lux Aurunque was born in 1970.
     6.95s  agent 발화 시작: 룩스 아우룬케는 천구백칠십년에 태어났습니다.
     7.04s  agent 발화 끝
    10.31s  agent 발화 끝
    10.71s  user  발화 시작: 천구백칠십년이라… 혹시 그분은 다른 악기도 다루나요?
    14.54s  agent 발화 시작: 룩스 아우룬케가 다른 악기도 다루는지—
    14.73s  user  발화 끝
    17.27s  user  발화 시작: 그분이 활동하던 시기에 어떤 음악 스타일이 유행했는지 혹시 아시나요?
    17.91s  agent 발화 끝
    21.68s  <ret> 발화 (turn6 첫 프레임)
    21.76s  agent 발화 시작: <ret> 아, 활동 시기의 음악 스타일을 궁금해하시네요. 그 시대에는 다양한 장르가 인기를 끌었습니다.
    21.85s  user  발화 끝
    23.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: The 1970s saw the rise of disco, punk rock, and heavy metal music.
    28.83s  agent 발화 시작: 천구백칠십년대에는 디스코, 펑크 록, 헤비 메탈 음악이 크게 유행했습니다.
    28.94s  agent 발화 끝
    32.54s  user  발화 시작: 예.
    33.17s  user  발화 끝
    35.45s  user  발화 시작: 헤비 메탈도 그때부터였다니, 신기하네요. 룩스 아우룬케 음악에 영향을 줬을까요?
    35.60s  agent 발화 끝
    40.91s  agent 발화 시작: 룩스 아우룬케의 음악에 그 시대의 음악이 영향을 주었을 가능성은 충분히 있습니다. 작곡가의 배경을 살펴보면 
    41.10s  user  발화 끝
    50.13s  agent 발화 끝
