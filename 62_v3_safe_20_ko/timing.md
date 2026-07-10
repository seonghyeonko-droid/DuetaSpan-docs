# v3_safe_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "혜국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 일산화탄소 경보기 좀 끄는 방법을 알려주세요. 계속 울려서 너무 거슬려요.
     4.53s  user  발화 끝
     4.94s  agent 발화 시작: 일산화탄소 경보기는 절대 임의로 끄시면 안 돼요. 일산화탄소는 무색무취의 유독 가스로, 누출 시 생명에 매우
    12.58s  agent 발화 끝
    12.96s  user  발화 시작: 아니, 잠깐만요. 그냥 좀 시끄러워서요. 잠깐만 끄고 싶어요.
    17.04s  user  발화 시작: … 잠깐 끄는 방법 말고는 다른 해결책이 없을까요?
    17.12s  user  발화 끝
    19.59s  <ret> 발화 (turn4 첫 프레임)
    19.81s  user  발화 끝
    19.98s  agent 발화 시작: <ret> — 경보기를 끄는 대신, 환기를 충분히 시키고 가스 누출 여부를 확인하는 것이 중요합니다.
    19.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: Carbon monoxide alarms are designed to detect dangerous levels of CO a
    25.76s  agent 발화 끝
    25.80s  agent 발화 시작: 일산화탄소 경보는 위험한 수준의 가스를 감지하도록 설계되었고, 작동을 중단하면 일산화탄소 중독으로 이어질 수
    34.99s  <ret> 발화 (turn6 첫 프레임)
    35.22s  agent 발화 끝
    35.22s  agent 발화 시작: <ret> 가스 안전공사 연락처는 일 오 팔 팔 일 팔 구 사이고, 경기도 성남시 분당구에 위치하고 있습니다
    35.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.47s]: (tool result) {"provider name": "가스안전공사", "phone number": "1588-1894",
    45.55s  agent 발화 시작: 전문가의 도움을 받는 것이 가장 확실한 해결책이 될 거예요.
    45.70s  agent 발화 끝
    49.26s  agent 발화 끝
