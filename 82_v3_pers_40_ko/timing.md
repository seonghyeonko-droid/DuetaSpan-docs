# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "가우",
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
#       "date": "2026-04-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 가우님. 저는 이아로예요. 여행 계획이나 휴식에 대해 편안하게 이야기 나눌 수 있는 동반자가 되
     8.43s  user  발화 시작: 음.
     8.43s  agent 발화 끝
     8.96s  user  발화 시작: 음, 이아로라고 하셨죠? 좀 독특한 이름인데요. 혹시 여행 계획 같은 거 진짜로 도와주시는 건가요?
     8.96s  user  발화 끝
    16.34s  agent 발화 시작: 네.
    16.34s  user  발화 끝
    16.87s  agent 발화 시작: 네, 가우님. 여행 계획 세우는 걸 어려워하시는 분들이 많더라고요. 어떤 여행을 생각하고 계신지, 혹시 특별
    16.87s  agent 발화 끝
    26.35s  user  발화 시작: 사실 다음 달에 혼자 일본에 가려고 하는데, 뭘 준비해야 할지 막막해서요. 특히 오사카 쪽을 생각하고 있어요
    26.35s  agent 발화 끝
    34.78s  agent 발화 시작: 오사카, 정말 멋진 곳이죠. 혼자 여행이시라니, 설레면서도 걱정도 되시겠어요. 혹시 어떤 스타일의 여행을 좋
    34.78s  user  발화 끝
    45.85s  agent 발화 끝
