# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "도현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "sibling",
#       "text": "User has a younger sibling named Jisoo."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Vietnamese."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "dish",
#       "text": "User's go-to comfort dish is butter chicken."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "skill",
#       "text": "User is a complete beginner at woodworking."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 기분 전환할 겸 노래 좀 틀어줘. Jeff Buckley의 H | S2 음, 괜찮은데… 요즘 구독 서비스 좀… | S3 …알아보고 있거든. 혹시 실버 패키지라는 게 있나? | S4 잠깐만. 매달 내는 건가? 다른 옵션은 없어?

     0.00s  user  발화 시작: 기분 전환할 겸 노래 좀 틀어줘. Jeff Buckley의 Hallelujah로.
     4.17s  <ret> 발화 (turn1 첫 프레임)
     4.68s  user  발화 끝
     4.71s  agent 발화 시작: <ret> [happy] 네, Jeff Buckley의 Hallelujah 틀어드릴게요. 지금 바로 재생 시
     5.45s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.63s]: (tool result) Hallelujah, Jeff Buckley, MUS3-005053, confirmed
     8.10s  user  발화 시작: 네.
     8.49s  user  발화 끝
     9.34s  agent 발화 끝
     9.36s  agent 발화 시작: 곡이 시작됐어요. 혹시 다른 노래도 듣고 싶으신가요?
    13.33s  user  발화 시작: 음, 괜찮은데… 요즘 구독 서비스 좀…
    13.34s  agent 발화 끝
    16.83s  user  발화 끝
    18.29s  user  발화 시작: …알아보고 있거든. 혹시 실버 패키지라는 게 있나?
    20.49s  agent 발화 시작: 그렇죠.
    21.26s  agent 발화 끝
    21.60s  <ret> 발화 (turn7 첫 프레임)
    21.85s  agent 발화 시작: <ret> 실버 패키지가 있습니다. 매달 실버 기능을 이용할 수 있는 상품이고요, 지금 바로 구독 신청해 드
    21.87s  user  발화 끝
    23.37s  ⚡SPAN 주입 [d'=1.77s / d_lead=8.07s]: (tool result) prod-11223, Silver Package, Monthly access to silver fea
    28.07s  user  발화 시작: 예.
    28.60s  user  발화 끝
    29.92s  agent 발화 끝
    30.10s  user  발화 시작: 잠깐만. 매달 내는 건가? 다른 옵션은 없어?
    34.56s  user  발화 끝
    34.90s  agent 발화 시작: 네, 실버 패키지는 매달 결제 방식입니다. 다른 옵션도 확인해 드릴까요?
    40.27s  agent 발화 끝
