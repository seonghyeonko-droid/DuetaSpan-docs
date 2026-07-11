# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Remy",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "home",
#       "text": "User's home address is 415 Oak Avenue."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
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
#       "date": "2025-11-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이선희 씨 연락처 있어? | S2 알아둬서 좋네. | S3 응, 완전 그렇지. 지금 서울 날씨는 어때? | S4 아, 아쉽다. 놓쳤네.

     0.00s  user  발화 시작: 이선희 씨 연락처 있어?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.03s  agent 발화 시작: <ret> 죄송하지만, 이선희 씨의 공개된 연락처 정보는 찾을 수 없었어요. 그런 정보는 보통 개인적으로 관
     0.03s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (no information found)
     0.03s  user  발화 끝
     0.13s  user  발화 시작: 응응.
     0.13s  agent 발화 끝
     0.14s  user  발화 시작: 그럼, 최근 앨범 발매일은 언제야?
     0.14s  user  발화 끝
     0.18s  agent 발화 시작: <ret> 그녀는 열다섯 번째 스튜디오 앨범, "My Christmas Story"를 이천이십삼 년 십이월 
     0.18s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: Lee Sun-hee released her fifteenth studio album, "My Christmas Story",
     0.18s  user  발화 끝
     0.26s  <ret> 발화 (turn8 첫 프레임)
     0.31s  user  발화 시작: 알아둬서 좋네.
     0.31s  agent 발화 끝
     0.33s  agent 발화 시작: 좋아하는 아티스트 소식을 꾸준히 듣는 건 정말 좋은 일이에요. 음악은 정말 기분을 좋게 해 주잖아요, 그렇지
     0.33s  user  발화 끝
     0.45s  user  발화 시작: 응, 완전 그렇지. 지금 서울 날씨는 어때?
     0.45s  agent 발화 끝
     0.50s  agent 발화 시작: <ret> 현재 서울의 기온은 섭씨 26.1도이고, 습도는 68퍼센트, 풍속은 시속 3.2킬로미터예요.
     0.50s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 26.1°C, humidity 68%, wind 3.2 km/h
     0.50s  user  발화 끝
     0.58s  user  발화 시작: 응.
     0.58s  agent 발화 끝
     0.59s  agent 발화 시작: 날씨가 꽤 좋네요! 밖에서 음악을 즐기기에 좋은 날씨일 것 같아요—
     0.59s  user  발화 끝
     0.61s  <ret> 발화 (turn12 첫 프레임)
     0.66s  user  발화 시작: …요즘 콘서트 많이 해?
     0.66s  agent 발화 끝
     0.69s  agent 발화 시작: <ret> 그녀는 이천이십사 년 이월 스물셋째 날부터 스물다섯째 날까지 서울 올림픽홀에서 “Re:Lee”라는
     0.69s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) Lee Sun-hee held a concert series, “Re:Lee”, from Februa
     0.69s  user  발화 끝
     0.85s  user  발화 시작: 아, 아쉽다. 놓쳤네.
     0.85s  agent 발화 끝
     0.87s  agent 발화 시작: 기대했던 행사를 놓치는 건 정말 아쉽네요. 앞으로의 공연 정보를 계속 얻으려면 그녀의 뉴스레터에 가입해 보시
     0.87s  user  발화 끝
     1.00s  agent 발화 끝
