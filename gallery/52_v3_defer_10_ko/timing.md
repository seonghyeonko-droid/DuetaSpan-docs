# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "가안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-01",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비비씨 뉴스 웹사이트를 크롤링해서, 깊이는 한 단계만, 페이지 | S2 알겠어. | S3 …그 크롤링 결과는 언제쯤 알 수 있을까? 지금 당장 보고 싶 | S4 아니, 괜찮아. 그냥 오늘 하루 어땠는지 물어보는 건 좀… 뜬

     0.00s  user  발화 시작: 비비씨 뉴스 웹사이트를 크롤링해서, 깊이는 한 단계만, 페이지당 최대 다섯 개 링크, 총 스무 페이지까지 조
     0.08s  <ret> 발화 (turn1 첫 프레임)
     0.10s  <ret> 발화 (turn6 첫 프레임)
     0.16s  agent 발화 시작: <ret> 크롤링을 시작했어요. 작업 아이디는 팔 구 삼 칠 사 이 일번이고, 지금은 진행 중이에요. 잠시만
     0.16s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) Crawl initiated. Task ID: 8937421. Status: pending.
     0.16s  user  발화 끝
     0.31s  user  발화 시작: 정말요?
     0.31s  agent 발화 끝
     0.32s  user  발화 시작: 알겠어.
     0.32s  user  발화 끝
     0.33s  agent 발화 시작: 오늘 하루는 어떠셨어요? 혹시 힘든 일은 없으셨는지—
     0.33s  user  발화 끝
     0.39s  user  발화 시작: …그 크롤링 결과는 언제쯤 알 수 있을까? 지금 당장 보고 싶어.
     0.39s  agent 발화 끝
     0.50s  agent 발화 시작: <ret> 크롤링이 완료되었어요. 작업 아이디 팔 구 삼 칠 사 이 일번이고, 총 백이십삼개의 기사를 찾았답
     0.50s  ⚡SPAN 주입 [d'=0.30s / d_lead=0.30s]: Crawl completed. Task ID: 8937421. Results: 123 articles found. Summar
     0.50s  user  발화 끝
     0.80s  user  발화 시작: 아니, 괜찮아. 그냥 오늘 하루 어땠는지 물어보는 건 좀… 뜬금없었나?
     0.80s  agent 발화 끝
     0.89s  agent 발화 시작: 아니에요, 괜찮아요. 저는 레스라고 해요. 가끔은 일상적인 이야기를 나누는 것도 좋다고 생각하거든요.
     0.89s  user  발화 끝
     1.00s  agent 발화 끝
