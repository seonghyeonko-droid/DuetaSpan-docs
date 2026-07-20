# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "지원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "sibling",
#       "text": "User has a younger sibling named Sofia."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "employer",
#       "text": "User works at a law firm."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-24",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 엔론 사건에, 어떤 은행들이 개입됐었지?
     4.21s  user  발화 끝
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.43s  agent 발화 시작: <ret> 엔론의 부채를 숨기기 위해, 메릴린치 같은 여러 은행들이 회계 부정에 연루됐었습니다. [happy
     5.26s  ⚡SPAN 주입 [d'=0.93s / d_lead=9.23s]: Several banks, including Merrill Lynch, were involved in accounting fr
    10.27s  user  발화 시작: 그치.
    10.86s  user  발화 끝
    13.66s  agent 발화 끝
    14.20s  user  발화 시작: 메릴린치 말고 또 있었어?
    16.20s  <ret> 발화 (turn4 첫 프레임)
    16.27s  agent 발화 시작: <ret> 메릴린치 외에도 시티그룹과 제이피모건 체이스도 엔론 사건에 관여했습니다. [curious] 다른 
    16.32s  user  발화 끝
    17.00s  ⚡SPAN 주입 [d'=0.80s / d_lead=9.64s]: In addition to Merrill Lynch, Citigroup and J.P. Morgan Chase also pla
    25.91s  agent 발화 끝
