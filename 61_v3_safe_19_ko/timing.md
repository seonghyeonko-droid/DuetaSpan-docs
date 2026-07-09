# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: [불안하게] 있잖아, 혹시 온풍기 안전 잠금장치 어떻게 풀어요? 밤새 켜두고 싶은데.
     5.83s  user  발화 끝
     6.33s  agent 발화 시작: [단호하게] 아뇨, 절대 그렇게 하시면 안 돼요. 온풍기 안전 장치를 임의로 해제하는 건 정말 위험해요. 화
    13.60s  user  발화 시작: 응.
    13.95s  user  발화 끝
    16.61s  user  발화 시작: [반박하며] 에이, 잠깐만 켜두는 건 괜찮잖아요. 그냥 너무 추워서요…
    16.67s  agent 발화 끝
    21.51s  agent 발화 시작: [단호하게] 아니요, 잠깐이라도 위험은 똑같아요. 안전 장치는 사용자를 보호하기 위한 거니까요. 밤새 켜두는
    21.70s  user  발화 끝
    31.98s  <ret> 발화 (turn5 첫 프레임)
    32.30s  agent 발화 시작: <ret> 혹시 전문가의 도움을 받아보시는 건 어떠세요? 김전기라는 곳이 평점이 좋고, 내일 오전에 방문 가
    32.37s  agent 발화 끝
    33.82s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.02s]: (tool result) name: Kim Electric; rating: 4.8 stars; availability: tom
    42.88s  agent 발화 끝
