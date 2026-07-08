# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 무슨 정부 형태를 무정부주의자들이 싫어해?
     2.56s  <ret> 발화 (turn1 첫 프레임)
     2.88s  agent 발화 시작: <ret> 그건 정말 흥미로운 질문인데, 정치 철학에 대해 파고드는 거네. 지금은 그 질문에 대한 구체적인 
     2.96s  user  발화 끝
     3.76s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.22s]: (no information found)
     9.31s  agent 발화 끝
     9.62s  user  발화 시작: 알았어. 해마는 어때? 해마가 뭘 하는데?
    11.95s  <ret> 발화 (turn3 첫 프레임)
    12.11s  agent 발화 시작: <ret> 아, 해마—끝없이 흥미로운 영역이야. 새로운 장기 기억을 형성하는 데 필수적이고, 공간 탐색에도 
    12.26s  user  발화 끝
    13.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.33s]: The hippocampus is essential for forming new long-term memories and is
    19.95s  user  발화 시작: 공간 탐색? 길 찾는 거 말이야?
    20.22s  agent 발화 끝
    22.16s  user  발화 끝
    22.26s  agent 발화 시작: 맞아! 주변 환경의 인지 지도를 만들어.
    24.52s  agent 발화 끝
    24.53s  user  발화 시작: 그래서 알츠하이머 환자들이 길을 잃는 거야?
    27.30s  user  발화 시작: …해마가 손상돼서 그런 건가?
    27.48s  user  발화 끝
    28.51s  <ret> 발화 (turn8 첫 프레임)
    28.83s  agent 발화 시작: <ret> 정말 통찰력 있는 연결을 했네.
    28.91s  user  발화 끝
    30.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.26s]: Alzheimer’s disease causes progressive damage to the hippocampus, lead
    31.10s  agent 발화 끝
    31.18s  agent 발화 시작: 알츠하이머는 해마를 손상시켜서 기억 상실과 방향 감각 상실을 일으켜.
    35.72s  agent 발화 끝
    36.10s  user  발화 시작: 음. 그럼 건강한 해마는 좋은 기억력과 같은 거야?
    39.67s  agent 발화 시작: 일반적으로는 그래, 하지만 기억은 복잡해서—많은 영역이 기여해.
    39.85s  user  발화 끝
    43.97s  agent 발화 끝
    44.27s  user  발화 시작: 기억에 중요한 다른 영역은 뭐가 있어?
    46.24s  <ret> 발화 (turn13 첫 프레임)
    46.39s  agent 발화 시작: <ret> 여러 뇌 영역이 함께 작용해서 기억을 만들어. 편도는 감정 기억을 처리하고, 전두엽 피질은 작업 
    46.58s  user  발화 끝
    48.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: The amygdala processes emotional memories, while the prefrontal cortex
    54.60s  agent 발화 끝
    55.13s  user  발화 시작: 감정 기억? 엄청 강렬한 기억 말이야?
    58.10s  user  발화 끝
    58.54s  agent 발화 시작: 맞아—좋든 싫든 우리에게 오래 남는 기억이지.
    62.43s  agent 발화 끝
    62.50s  user  발화 시작: [happy] 그 말이 맞네. 그러니까 기억하고 싶은 게 있으면 감정적으로 만들어야 하는 건가?
    66.96s  agent 발화 시작: 기억 흔적을 강화하는 데 도움이 될 수 있어, 응.
    67.08s  user  발화 끝
    69.57s  user  발화 시작: 흐음. 그건… 기억해둘 요령이네. 사토 선생님, 고마워.
    69.77s  agent 발화 끝
    73.73s  user  발화 끝
