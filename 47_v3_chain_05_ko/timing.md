# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "도연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시… 저번 주 토요일에 봤던 영화 있잖아, 그거 다시 보고 싶은데… 제목이 뭐였더라?
     6.25s  <ret> 발화 (turn1 첫 프레임)
     6.57s  agent 발화 시작: <ret> 혹시 지난 토요일에 보셨던 영화를 다시 보고 싶으시군요. 제목이 기억나지 않으시는 건가요?
     6.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: [2026-07-03] I said I wanted to rewatch the movie I saw last Saturday.
     6.57s  user  발화 끝
    12.63s  user  발화 시작: 응, 기억이 안 나… 그냥 좀 신났던 영화였어.
    12.63s  agent 발화 끝
    16.36s  <ret> 발화 (turn3 첫 프레임)
    16.68s  agent 발화 시작: <ret> 혹시 이천이십사년 오월 십칠일에 개봉한 '퓨리오사: 매드맥스 사가' 말씀하시는 건가요? 조지 밀러
    16.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.58s]: (tool result) "2024년 5월 17일에 개봉한 '퓨리오사: 매드맥스 사가'는 조지 밀러 감독의 액션 블록버스터 영
    16.68s  user  발화 끝
    24.26s  user  발화 시작: 어.
    24.26s  agent 발화 끝
    24.76s  user  발화 끝
