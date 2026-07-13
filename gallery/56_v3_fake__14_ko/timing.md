# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "윤완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-26",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 르브론 제임스가 다시 캐벌리어스로 돌아간 건 언제였지? | S2 그가 캐벌리어스로 돌아왔을 때, 팀에 어떤 변화가 있었어? | S3 그럼, 그가 처음 캐벌리어스에 입단한 건 언제였지? — | S4 이천삼년 드래프트에는 또 누가 있었어?

     0.00s  user  발화 시작: 르브론 제임스가 다시 캐벌리어스로 돌아간 건 언제였지?
     3.18s  <ret> 발화 (turn1 첫 프레임)
     3.34s  agent 발화 시작: <ret> 르브론 제임스가 고향팀인 클리블랜드 캐벌리어스로 돌아온 건 이천십사년 칠월 십일일이에요. 다시 한
     3.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.68s]: LeBron James signed with the Cleveland Cavaliers on July 11, 2014, ret
     3.34s  user  발화 끝
    10.03s  user  발화 시작: 와.
    10.03s  agent 발화 끝
    10.50s  user  발화 시작: 음, 그가 마이애미 히트에서 몇 시즌 뛰었는지도 알려줄 수 있어?
    10.50s  user  발화 끝
    15.12s  <ret> 발화 (turn4 첫 프레임)
    15.28s  agent 발화 시작: <ret> 마이애미 히트에서 네 시즌 동안 뛰면서 두 번의 엔 비 에이 우승을 했어요. 그 후에 이천십사년에
    15.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.07s]: LeBron James played four seasons with the Miami Heat, winning two NBA 
    15.28s  user  발화 끝
    23.95s  <ret> 발화 (turn5 첫 프레임)
    24.35s  agent 발화 시작: <ret> 혹시 여행 계획 세우시는 데 도움이 필요하시면 언제든 말씀해주세요.
    24.35s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.30s]: The current temperature in Reykjavik, Iceland is 8.2°C, with a wind sp
    24.35s  agent 발화 끝
    28.64s  user  발화 시작: 어.
    28.64s  agent 발화 끝
    29.12s  user  발화 시작: 그가 캐벌리어스로 돌아왔을 때, 팀에 어떤 변화가 있었어?
    29.12s  user  발화 끝
    32.78s  <ret> 발화 (turn8 첫 프레임)
    32.94s  agent 발화 시작: <ret> 르브론 제임스가 이천십사년에 캐벌리어스로 돌아오자마자 팀의 리더가 되었고, 사번 연속 엔 비 에이
    32.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.16s]: When LeBron James returned to the Cleveland Cavaliers in 2014, he imme
    32.94s  user  발화 끝
    40.10s  user  발화 시작: 사번 연속이라고? 대단하네.
    40.10s  agent 발화 끝
    41.54s  agent 발화 시작: 네, 정말 놀라운 기록이죠. 르브론 제임스는 팀에 큰 영향을 미쳤어요.
    41.54s  user  발화 끝
    46.31s  user  발화 시작: 그럼, 그가 처음 캐벌리어스에 입단한 건 언제였지? —
    46.31s  agent 발화 끝
    50.13s  user  발화 시작: …그가 처음 캐벌리어스에 입단했을 때 드래프트 순위가 어떻게 됐었는지 궁금해.
    50.13s  user  발화 끝
    54.58s  <ret> 발화 (turn13 첫 프레임)
    54.90s  agent 발화 시작: <ret> 르브론 제임스는 이천삼년 엔 비 에이 드래프트에서 클리블랜드 캐벌리어스에 일순위로 지명되었고, 팀
    54.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.16s]: LeBron James was selected as the first overall pick in the 2003 NBA dr
    54.90s  user  발화 끝
    62.06s  user  발화 시작: 음.
    62.06s  agent 발화 끝
    62.46s  <ret> 발화 (turn15 첫 프레임)
    62.54s  agent 발화 시작: <ret> 르브론 제임스의 루키 시즌이었던 이천삼 이천사 시즌에 캐벌리어스는 삼십오승 사십칠패의 기록을 세웠
    62.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.12s]: The Cleveland Cavaliers had a record of 35–47 in the 2003–2004 season,
    62.54s  user  발화 끝
    70.66s  user  발화 시작: 이천삼년 드래프트에는 또 누가 있었어?
    70.66s  agent 발화 끝
    72.64s  <ret> 발화 (turn17 첫 프레임)
    73.04s  agent 발화 시작: <ret> 이천삼년 엔 비 에이 드래프트에는 르브론 제임스와 함께 드웨인 웨이드, 카멜로 앤서니, 크리스 보
    73.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.59s]: The 2003 NBA draft class included Dwyane Wade, Carmelo Anthony, and Ch
    73.04s  user  발화 끝
    81.64s  user  발화 시작: 르브론 제임스 관련 다큐멘터리 추천해 줄 수 있어?
    81.64s  agent 발화 끝
    85.14s  <ret> 발화 (turn19 첫 프레임)
    85.46s  agent 발화 시작: <ret> "More Than a Game"이라는 이천구년 다큐멘터리가 있어요. 르브론 제임스의 고등학교 시
    85.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.16s]: (tool result) "More Than a Game" is a 2009 documentary film focusing o
    85.46s  user  발화 끝
    92.62s  agent 발화 끝
