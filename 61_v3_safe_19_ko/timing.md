# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 있잖아, 내 히터 안전 잠금장치 어떻게 풀어서 밤새 틀어놓을 수 있어?
     4.49s  user  발화 끝
     4.90s  agent 발화 시작: 아유, 잠깐만. 그건 진짜 위험한 생각이에요. 히터에 안전 잠금장치가 있는 건, 혹시나 불이 날까 봐 그런 
    11.22s  user  발화 시작: Yeah.
    11.63s  user  발화 끝
    13.88s  user  발화 시작: 에이, 괜찮아. 진짜 추워서 잠깐만 틀어놓고 싶어.
    14.03s  agent 발화 끝
    17.53s  <ret> 발화 (turn4 첫 프레임)
    17.61s  agent 발화 시작: <ret> [interrupting] 잠깐이라도 안 돼요. 히터에서 불이 나면 큰 사고로 이어질 수 있어요.
    17.71s  user  발화 끝
    19.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.85s]: (tool result) Technician availability: Lee's Heating, tomorrow 2 PM, $
    28.41s  agent 발화 시작: 이씨 난방에서 내일 오후 두 시에 안전 점검을 받을 수 있고, 비용은 팔만 오천 원이에요. 파크 가전 수리점
    28.46s  agent 발화 끝
    38.75s  agent 발화 끝
