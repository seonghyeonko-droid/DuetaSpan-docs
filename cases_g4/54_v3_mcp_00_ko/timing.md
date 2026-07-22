# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "연훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "child",
#       "text": "User has a child named Haruto, age 3."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-20",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 리아스 씨. 저 이번에 이사 갈 집을 좀 보고 있 | S2 그렇게 말씀해 주시니 힘이 나네요. 아, 그런데 이사 갈 동네 | S3 네, 그래야겠어요. 혹시 제가 잊지 않게 내일 아침 일곱시에  | S4 네, 그럴게요. 이제 좀 쉬어야겠어요. 안녕히 계세요.

     0.00s  user  발화 시작: 안녕하세요, 리아스 씨. 저 이번에 이사 갈 집을 좀 보고 있는데, 리버벤드 타운하우스를 사월 오일에 방문할
     2.42s  agent 발화 시작: 네.
     2.97s  agent 발화 끝
     6.51s  <ret> 발화 (turn2 첫 프레임)
     6.75s  agent 발화 시작: <ret> 리버벤드 타운하우스 사월 오일 방문 예약이 완료되었습니다. 예약 번호는 에이치 오 엠 이 공 공 
     6.86s  user  발화 끝
     7.81s  ⚡SPAN 주입 [d'=1.30s / d_lead=11.36s]: (tool result) Riverbend Townhouses, 2024-04-05, HOM2-005708, confirmed
    11.61s  user  발화 시작: 네.
    12.05s  user  발화 끝
    18.11s  agent 발화 끝
    18.44s  user  발화 시작: 감사해요. 사실 제가 새 직장으로 옮기면서 이사를 하는 거라 조금 긴장되네요.
    23.61s  agent 발화 시작: [happy] 새로운 환경에 적응하는 게 쉽지는 않지만, 충분히 잘 해내실 거예요. 제가 옆에서 응원할게요.
    23.67s  user  발화 끝
    30.33s  agent 발화 끝
    30.38s  user  발화 시작: 그렇게 말씀해 주시니 힘이 나네요. 아, 그런데 이사 갈 동네에 괜찮은 해변이 있는지 궁금해요. 샌프란시스코
    38.69s  <ret> 발화 (turn7 첫 프레임)
    39.29s  ⚡SPAN 주입 [d'=0.60s / d_lead=4.16s]: (tool result) (no information found)
    39.56s  agent 발화 시작: <ret> 아쉽게도 조건에 맞는 무료 해변 정보가 검색되지 않았어요.
    39.75s  user  발화 끝
    43.55s  user  발화 시작: 아, 그렇군요. 그럼 그냥 근처에 유명한 공원이라도 있을까요?
    43.73s  agent 발화 끝
    46.43s  agent 발화 시작: 네.
    46.98s  agent 발화 끝
    47.66s  user  발화 끝
    47.85s  agent 발화 시작: [curious] 네, 샌프란시스코라면 금문교 근처의 공원들이 정말 유명해요. 가벼운 산책을 하며 긴장을 푸
    52.70s  user  발화 시작: 예.
    53.29s  user  발화 끝
    56.07s  user  발화 시작: 네, 그래야겠어요. 혹시 제가 잊지 않게 내일 아침 일곱시에 알람 좀 맞춰 주시겠어요?
    56.24s  agent 발화 끝
    58.28s  agent 발화 시작: 맞아요.
    58.91s  agent 발화 끝
    61.35s  <ret> 발화 (turn14 첫 프레임)
    61.47s  agent 발화 시작: <ret> 내일 칠월 십일일 오전 일곱시에 알람이 설정되었습니다.
    61.58s  user  발화 끝
    62.71s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.12s]: (tool result) Alarm set for 07:00, 2026-07-11
    65.59s  agent 발화 끝
    66.72s  user  발화 시작: 감사합니다, 리아스 씨. 덕분에 마음이 한결 편해졌어요.
    70.41s  agent 발화 시작: [happy] 도움이 되었다니 정말 기뻐요.
    70.41s  user  발화 끝
    72.58s  agent 발화 끝
    74.25s  user  발화 시작: 네, 그럴게요. 이제 좀 쉬어야겠어요. 안녕히 계세요.
    77.58s  agent 발화 시작: 네, 편안한 밤 되세요. 좋은 꿈 꾸시길 바랍니다!
    77.62s  user  발화 끝
    81.28s  agent 발화 끝
