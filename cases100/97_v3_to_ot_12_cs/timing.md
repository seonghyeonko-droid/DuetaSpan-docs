# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Mia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "commute",
#       "text": "User takes a shuttle bus."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "emergency",
#       "text": "User's emergency contact is Haruto."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 모시… | S2 롤링 스톤즈의 “Sympathy for the Devil” 베 | S3 아, 그렇군요? 정말 흥미롭네요… | S4 그러면, 음, 옛날 친구들과 연락하는 건 어때요? 저는 그게 

     0.00s  user  발화 시작: 안녕, 모시…
     1.42s  user  발화 끝
     2.70s  user  발화 시작: 롤링 스톤즈의 “Sympathy for the Devil” 베이스 기타는 누가 쳤는지 궁금해요.
     6.93s  <ret> 발화 (turn2 첫 프레임)
     7.12s  agent 발화 시작: <ret> 음, 사실 키스 리처즈가 쳤어—빌 와이먼의 악기가 그때 세션에서 말을 안 들어서 대신 베이스를 쳤
     7.14s  user  발화 끝
     7.23s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.39s]: Keith Richards played bass on the Rolling Stones’ “Sympathy for the De
    15.51s  agent 발화 끝
    16.58s  user  발화 시작: 아, 그렇군요? 정말 흥미롭네요…
    19.76s  user  발화 끝
    20.67s  user  발화 시작: 그러면, 음, 옛날 친구들과 연락하는 건 어때요? 저는 그게 너무 어려워요.
    25.71s  user  발화 끝
    26.06s  agent 발화 시작: 흐음, 그거 진짜 흔한 일이야! 조금씩 자주 연락하는 게 중요해—간단한 문자나 전화 한 통이 큰 차이를 만들
    36.86s  agent 발화 끝
